import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deleteEvent } from '../features/events/eventSlice';
import { User } from '../types/user'


const EventDetails: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = useSelector((state: RootState) =>
    state.event.events.find(event => event.id === Number(eventId))
  );
  const host = useSelector((state: RootState) => {
    if (!event) return null;
    return state.user.byId[event.host] || null;
  }) as User || null;

  const isEventHost = event?.host === host.uid

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
    navigate('/explore');
  };

  const handleGoBack = () => {
    navigate('/explore');
  };

  const handleEdit = () => {
    navigate(`/explore/${event.id}/edit`);
  };

  let isHost = true;
  let currentUser = true;
  // later compare ids of both

  return (
    <div className="max-w-4xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg">
      <img src={event.coverImg} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <p className="text-gray-700 mb-4">Hosted by:
        <Link to={`/profile/${host.uid}`}> <span className="text-blue-700 font-bold underline"> {host.displayName}</span></Link></p>
      <p className="text-gray-700 mb-4">Price: {event.price === 0 ? 'Free' : '$' + event.price}</p>
      <p className="text-gray-700 mb-4">Open Spots: {event.openSpots}</p>
      <div className="flex items-center mt-4">
        <span className="text-gray-600">Rating: {event.stats.rating}</span>
        <span className="ml-2 text-gray-600">({event.stats.reviewCount} reviews)</span>
      </div>
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={handleGoBack}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
        {isEventHost && (
          <>
            <button
              onClick={handleEdit}
              className="bg-yellow-600 text-white px-4 py-2 rounded"
            > Edit Event
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Event
            </button>
          </>

        )
        }
      </div>
    </div>)
}

export default EventDetails;