import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootState } from '../app/store';
import { updateUser } from '../features/users/userSlice';
import { User as UserType } from '../types/user';

const EditProfile: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const currentUser = useSelector((state: RootState) =>
        state.user.value.find(user => user.id === Number(userId))
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!currentUser) {
        return <div>User not found</div>;
    }

    const formik = useFormik({
        initialValues: {
            name: currentUser.name,
            email: currentUser.email,
            profileImage: currentUser.profileImage,
            bio: currentUser.bio,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            profileImage: Yup.string(),
            bio: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            const updatedUser = {
                ...currentUser,
                ...values,
            };
            dispatch(updateUser(updatedUser));
            navigate(`/profile/${updatedUser.id}`);
        },
    });

    return (
        <div className="max-w-4xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-10">Edit Profile</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-900 font-bold">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-900 font-bold">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="profileImage" className="block text-gray-900 font-bold">Profile Image URL</label>
                    <input
                        id="profileImage"
                        name="profileImage"
                        type="text"
                        className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        onChange={formik.handleChange}
                        value={formik.values.profileImage}
                    />
                    {formik.errors.profileImage ? <div className="text-red-500">{formik.errors.profileImage}</div> : null}
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-gray-900 font-bold">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                    />
                    {formik.errors.bio ? <div className="text-red-500">{formik.errors.bio}</div> : null}
                </div>
                <button type="submit" className="my-4 bg-blue-600 text-white px-4 p-2 rounded">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProfile;
