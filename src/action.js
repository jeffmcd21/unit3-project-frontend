
import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
//update
export const updateAction = async ({request, params}) => {
const formData = await request.formData()
const updatedEvent = {
    name: formData.get('name'),
    image: formData.get('image'),
    start: formData.get('start'),
    end: formData.get('end'),
    location: formData.get('location'),
    price: formData.get('price')
}
await fetch(`${URL}/event/${params.id}`, {
    method: "put",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(updatedEvent)
})

return redirect("/")
}

//create
export const createAction = async ({request, params}) => {
    const formData = await request.formData()
    const createdEvent = {
        name: formData.get('name'),
        image: formData.get('image'),
        start: formData.get('start'),
        end: formData.get('end'),
        location: formData.get('location'),
        price: formData.get('price')
    }
    await fetch(`${URL}/event`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(createdEvent)
    })
    
    return redirect("/")
    }
    //delete
    export const deleteAction = async ({params}) => {
        await fetch (`${URL}/event/${params.id}`, {
            method: 'delete'
        });
        return redirect('/')
    }