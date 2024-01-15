import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../sass/add.scss'
import { Helmet } from 'react-helmet';

const Add = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    fetch('http://localhost:7000/')
      .then((res) => res.json())
      .then((api) => setData(api))
  }

  function handleAdd(val) {
    fetch("http://localhost:7000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((api) => {
        getAll()
      })
  }

  function handleDelete(id) {
    fetch("http://localhost:7000/" + id, { method: "DELETE", })
      .then((res) => res.json())
      .then((api) => {
        getAll()
      })
  }



  return (
    <div className="add">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="icon" sizes="72x72" href="https://cdn-icons-png.flaticon.com/512/63/63747.png" />
      </Helmet>
      <Formik
        initialValues={{ name: '', img: '', desc: '', category: '', price: '', date: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          img: Yup.string().required('Required'),
          desc: Yup.string().required('Required'),
          category: Yup.string().required('Required'),
          price: Yup.number().required('Required'),
          date: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="name" />

          <label htmlFor="img">Image</label>
          <Field name="img" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="img" />

          <label htmlFor="category">Category</label>
          <Field name="category" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="category" />

          <label htmlFor="desc">Description</label>
          <Field name="desc" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="desc" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="price" />

          <label htmlFor="date">Date</label>
          <Field name="date" type="text" placeholder='Please , fill in the boxes' />
          <ErrorMessage name="date" />



          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
        {data.map(item => (
          <tr>
            <td><b>{item.name}</b></td>
            <td><img width={130} src={item.img} alt="" /></td>
            <td>{item.category}</td>
            <td>{item.desc}</td>
            <td><b>$ {item.price}</b></td>
            <td>{item.date}</td>
            <td><button onClick={() => handleDelete(item._id)}>X</button></td>


          </tr>
        ))}



      </table>

    </div>
  );
};

export default Add