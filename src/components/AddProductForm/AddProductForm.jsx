import {useState} from 'react'
import React from 'react'
import { FormField, Button,  Form , Segment } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'
import { name } from 'ejs'




export default function AddProductForm({handleAddProduct}){
 
    const [photo, setPhoto] = useState("")
    const [state, setState]= useState({
      category: '',
      name: '',
      price: '',
      amount: '',
     
    })


    
    function handleFileInput(e){
        setPhoto(
            e.target.files[0]
        )
    }

    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      const formData = new FormData()
      formData.append('category', state.category)
      formData.append('name', state.name)
      formData.append('price', state.price)
      formData.append('amount', state.amount)
      formData.append('photo',photo)
    
      handleAddProduct(formData)

    }

    return (
    <Form onSubmit={handleSubmit}>
         <FormField>
        <label>Category</label>
        <input placeholder='Category' name='category'value={state.category} onChange={handleChange} />
      </FormField>
     
      <FormField>
        <label>Name</label>
        <input placeholder='Name' name='name'value={state.name} onChange={handleChange}  />
      </FormField>
     
      <FormField>
        <label>Price</label>
        <input placeholder='price' name='price'value={state.price} onChange={handleChange} />
      </FormField>
      <FormField>
        <label>Amount</label>
        <input placeholder='amount' name='amount'value={state.amount} onChange={handleChange} />
      </FormField>
      <FormField>
        <label>Photo</label>
        <input type='file' onChange={handleFileInput} />
      </FormField>
     
      
      <Button type='submit'>Submit</Button>
    </Form>
    )
}

