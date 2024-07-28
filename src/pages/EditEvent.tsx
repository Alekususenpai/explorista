import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootState } from '../app/store';
import { updateEvent } from '../features/events/eventSlice';

const EditEvent: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = useSelector((state: RootState) =>
    state.event.events.find(event => event.id === Number(eventId))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!event) {
    return <div>Event not found</div>;
  }

  const formik = useFormik({
    initialValues: {
      title: event.title,
      description: event.description,
      price: event.price,
      coverImg: event.coverImg,
      openSpots: event.openSpots,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      coverImg: Yup.string(),
      openSpots: Yup.number().required('Required').min(0),
    }),
    onSubmit: (values) => {
      const updatedEvent = {
        ...event,
        ...values,
      };
      dispatch(updateEvent(updatedEvent));
      navigate(`/explore/${event.id}`);
    },
  });

  return (
    <div className="my-20 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-10">Edit Event</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-900 font-bold">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title ? <div className="text-red-500">{formik.errors.title}</div> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-900 font-bold">Description</label>
          <textarea
            id="description"
            name="description"
            className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description ? <div className="text-red-500">{formik.errors.description}</div> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-900 font-bold">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {/* {formik.errors.price ? <div className="text-red-500">{formik.errors.price}</div> : null} */}
        </div>
        <div className="mb-4">
          <label htmlFor="coverImg" className="block text-gray-900 font-bold">Cover Image</label>
          <input
            id="coverImg"
            name="coverImg"
            type="text"
            className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.coverImg}
          />
          {formik.errors.coverImg ? <div className="text-red-500">{formik.errors.coverImg}</div> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="openSpots" className="block text-gray-900 font-bold">Open Spots</label>
          <input
            id="openSpots"
            name="openSpots"
            type="number"
            className="mt-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.openSpots}
          />
          {formik.errors.openSpots ? <div className="text-red-500">{formik.errors.openSpots}</div> : null}
        </div>
        <button type="submit" className="my-4 bg-blue-600 text-white px-4 p-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEvent;
