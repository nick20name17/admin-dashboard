import { Button, Form, Input, InputNumber, Modal, Select } from 'antd'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'

import { useCategories } from '../../../../providers/categories-provider'

export const Actions = ({ product }) => {
    return (
        <div className='flex items-center gap-2'>
            <EditModal product={product} />
            <DeleteModal product={product} />
        </div>
    )
}

const DeleteModal = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleDeleteProduct = () => {
        axios
            .delete(`https://api.escuelajs.co/api/v1/products/${product?.key}`)
            .then(() => setIsModalOpen(false))
    }

    return (
        <>
            <Button
                type='primary'
                danger
                onClick={showModal}>
                <Trash className='size-4' />
            </Button>
            <Modal
                title={
                    <>
                        Delete
                        <span className='font-bold text-blue-600'> {product.title}</span>
                    </>
                }
                footer={[
                    <Button
                        key='back'
                        onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key='submit'
                        type='primary'
                        danger
                        onClick={handleDeleteProduct}>
                        Delete
                    </Button>
                ]}
                open={isModalOpen}
                onCancel={handleCancel}></Modal>
        </>
    )
}

const EditModal = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [category, setCategory] = useState(0)

    const showModal = () => setIsModalOpen(true)

    const handleCancel = () => setIsModalOpen(false)

    const categories = useCategories()

    const options = categories?.map((category) => ({
        value: category.id,
        label: category.name
    }))

    const mergedOptions = [
        {
            value: 0,
            label: 'All'
        },
        ...options
    ]

    const handleAddProduct = () => {
        axios
            .post('https://api.escuelajs.co/api/v1/products/', {
                title: 'string',
                price: 100,
                description: 'string',
                categoryId: 5,
                images: [
                    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                ]
            })
            .then(() => setIsModalOpen(false))
    }

    return (
        <>
            <Button
                type='primary'
                onClick={showModal}>
                <Edit className='size-4' />
            </Button>
            <Modal
                title={
                    <>
                        Edit
                        <span className='font-bold text-blue-600'> {product.title}</span>
                    </>
                }
                footer={[
                    <Button
                        key='back'
                        onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key='submit'
                        type='primary'
                        onClick={handleAddProduct}>
                        Edit
                    </Button>
                ]}
                open={isModalOpen}
                onCancel={handleCancel}>
                <Form layout='vertical'>
                    <Form.Item label='Title'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Category'>
                        <Select
                            defaultValue={category}
                            onChange={(value) => setCategory(value)}
                            disabled={!categories || categories.length === 0}
                            options={mergedOptions}
                        />
                    </Form.Item>

                    <Form.Item label='Description'>
                        <Input.TextArea className='!resize-none' />
                    </Form.Item>

                    <Form.Item
                        className='w-full'
                        label='Price'>
                        <InputNumber min={1} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
