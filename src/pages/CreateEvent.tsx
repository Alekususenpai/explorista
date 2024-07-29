import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../features/events/eventSlice';
import { updateUser } from '../features/users/userSlice';
import { RootState } from '../app/store';

const CreateEvent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = useSelector((state: RootState) => state.auth.currentUserId);
    const currentUser = useSelector((state: RootState) => state.user.byId[userId || ''])

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: 0,
            coverImg: '',
            openSpots: 0,
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            price: Yup.number().required('Required').min(0),
            coverImg: Yup.string(),
            openSpots: Yup.number().required('Required').min(0),
        }),
        onSubmit: (values, { resetForm }) => {
            const newEvent = {
                ...values,
                coverImg: values.coverImg || 'https://picsum.photos/400',
                id: Date.now(),
                stats: {
                    rating: 0,
                    reviewCount: 0,
                },
                host: userId,
            };
            dispatch(addEvent(newEvent));

            if (currentUser) {
                dispatch(updateUser({
                    uid: currentUser.uid,
                    isHost: true,
                    eventsHosted: [...currentUser.eventsHosted, newEvent.id],
                }))
            }
            navigate(`/explore/${newEvent.id}`, { state: { event: newEvent } });
            resetForm();
        },
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Create Event</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-500">{formik.errors.title}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-500">{formik.errors.description}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-red-500">{formik.errors.price}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImg"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.coverImg}
                    />
                    {formik.touched.coverImg && formik.errors.coverImg ? (
                        <div className="text-red-500">{formik.errors.coverImg}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Open Spots</label>
                    <input
                        type="number"
                        name="openSpots"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.openSpots}
                    />
                    {formik.touched.openSpots && formik.errors.openSpots ? (
                        <div className="text-red-500">{formik.errors.openSpots}</div>
                    ) : null}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-primary text-white rounded mt-4"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
