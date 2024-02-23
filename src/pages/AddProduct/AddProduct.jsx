// import React from 'react';
// import { useForm } from 'react-hook-form';
// import SectionTitle from '../../components/SectionTitle/SectionTitle';

// const AddProduct = () => {

//     const { register, handleSubmit } = useForm();

//     const onSubmit = (data) => {
//         const productDetails = {
//             name: data.name,
//             quantity: data.quantity,
//             category: data?.category,
//             code: data?.code,
//             image: data?.image,
//             postTime: data.date,
//             price: data.price
//         }
//         console.log(productDetails)
//     }
//     return (
//         <div className='supershop-container'>
//             <SectionTitle
//                 title="Featured Products"
//                 descrition="Welcome to our showcase selections, where uniqueness meets quality."
//             />
//             <div className='md:w-5/6 rounded-lg mx-auto w-full shadow-lg p-10'>
//                 <form className='' onSubmit={handleSubmit(onSubmit)}>
//                     <div className='flex gap-6'>
//                         {/* Product Name */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Product Name*</span>
//                             </label>
//                             <input
//                                 {...register("name", { required: true })}
//                                 type="text"
//                                 placeholder="Product Name"
//                                 className="input input-bordered w-full focus:outline-none" />
//                         </div>
//                         {/* Quantity */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Quantity*</span>
//                             </label>
//                             <input
//                                 {...register("quantity", { required: true })}
//                                 type="number"
//                                 placeholder="Quantity"
//                                 className="input input-bordered w-full focus:outline-none" />
//                         </div>
//                     </div>
//                     <div className='flex gap-6'>
//                         {/* price */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Price*</span>
//                             </label>
//                             <input
//                                 {...register("price", { required: true })}
//                                 type="number"
//                                 placeholder="Price"
//                                 className="input input-bordered focus:outline-none w-full" />
//                         </div>
//                         {/* Date */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Date*(mm/dd/yyyy)</span>
//                             </label>
//                             <input
//                                 {...register("date", { required: true })}
//                                 type="date"
//                                 placeholder="Date"
//                                 className="input input-bordered focus:outline-none w-full" />
//                         </div>
//                     </div>
//                     <div className='flex gap-6'>
//                         {/* category */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Category*</span>
//                             </label>
//                             <select
//                                 defaultValue="default"
//                                 {...register('category', { required: true })}
//                                 className="select select-bordered focus:outline-none w-full">
//                                 <option disabled value="default">Select a category</option>
//                                 <option value="Breakfast">Breakfast</option>
//                                 <option value="Lunch">Lunch</option>
//                                 <option value="Dinner">Dinner</option>
//                             </select>
//                         </div>
//                         {/* product Code */}
//                         <div className="form-control w-full my-1">
//                             <label className="label">
//                                 <span className="label-text">Product Code*</span>
//                             </label>
//                             <input
//                                 {...register("code", { required: true })}
//                                 type="number"
//                                 placeholder="Product Code"
//                                 className="input input-bordered focus:outline-none w-full" />
//                         </div>
//                     </div>
//                     {/* Image */}
//                     <div className='form-control w-full my-1'>
//                         <label className="label">
//                             <span className="label-text">Image URL*</span>
//                         </label>
//                         <input
//                             {...register("image", { required: true })}
//                             type="file"
//                             placeholder="Select Image"
//                             className="input input-bordered focus:outline-none w-full" />
//                     </div>
//                     <button className="btn btn-warning w-full mt-4">Add Product</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;




import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import Axios for making HTTP requests
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/sellProduct', data);
            console.log(response.data);
            // if (data.message === "success") {
            //     toast.success("Wow! You Leave a feedback!")
            //     reset();
            //   }
        } catch (error) {
            console.error('Error adding product:', error);
            // Add error handling logic here
        }
    };

    return (
        <div className='supershop-container'>
            <SectionTitle
                title="Featured Products"
                descrition="Welcome to our showcase selections, where uniqueness meets quality."
            />
            <div className='md:w-5/6 rounded-lg mx-auto w-full shadow-lg p-10'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-6'>
                        {/* Product Name */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Product Name*</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full focus:outline-none" />
                            {errors.name && <span className="text-red-500">Product Name is required</span>}
                        </div>
                        {/* Quantity */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Quantity*</span>
                            </label>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered w-full focus:outline-none" />
                            {errors.quantity && <span className="text-red-500">Quantity is required</span>}
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        {/* price */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.price && <span className="text-red-500">Price is required</span>}
                        </div>
                        {/* Date */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Date*(mm/dd/yyyy)</span>
                            </label>
                            <input
                                {...register("date", { required: true })}
                                type="date"
                                placeholder="Date"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.date && <span className="text-red-500">Date is required</span>}
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        {/* category */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register('category', { required: true })}
                                className="select select-bordered focus:outline-none w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                            {errors.category && <span className="text-red-500">Category is required</span>}
                        </div>
                        {/* product Code */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Product Code*</span>
                            </label>
                            <input
                                {...register("code", { required: true })}
                                type="number"
                                placeholder="Product Code"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.code && <span className="text-red-500">Product Code is required</span>}
                        </div>
                    </div>
                    {/* Image */}
                    <div className='form-control w-full my-1'>
                        <label className="label">
                            <span className="label-text">Image URL*</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            placeholder="Select Image"
                            className="input input-bordered focus:outline-none w-full" />
                        {errors.image && <span className="text-red-500">Image is required</span>}
                    </div>
                    <button className="focus:outline-none focus:ring-2 w-full mt-5 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;