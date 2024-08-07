import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { deleteUser } from '../features/users/userSlice';

const Profile: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useParams<{ userId: string }>();
  const user = useSelector((state: RootState) => state.user.byId[userId || '']);

  const currentUserId = useSelector((state: RootState) => state.auth.currentUserId);
  const events = useSelector((state: RootState) => state.event.events);

  const isOwner = currentUserId === user?.uid

  const hostedEvents = user?.eventsHosted.map(eventId => events.find(event => event.id === eventId))

  const handleDelete = () => {
    dispatch(deleteUser(user.uid));
    navigate('/explore');
  };

  if (!currentUserId) {
    return <h2 className="text-center mt-20 text-xl">You are not logged in.</h2>;
  }

  if (!isOwner) {
    return <h2 className="text-center mt-20 text-xl">This is not your profile.</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto my-20 p-8 rounded-lg shadow-lg">
      <img src={user.photoURL} alt={user.displayName} className="w-32 h-32 rounded-full mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-center mb-4">{user.displayName}</h1>
      <p className="text-center text-gray-700 mb-4">Bio: {user.bio}</p>
      <p className="text-center text-gray-700 mb-4">{user.email}</p>
      <div className="text-center mb-4">
        {user.isHost ? (
          <span className="badge bg-pink-600 text-white px-2 py-1 rounded">Host</span>
        ) : (
          <span className="badge bg-pink-600 text-white px-2 py-1 rounded">Attendee</span>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Events Hosted</h2>
        {hostedEvents?.length > 0 ? (
          <ul className="list-disc list-inside">
            {hostedEvents.map(event => (
              <li key={event?.id} className="text-pink-700 font-bold underline">
                <Link to={`/explore/${event?.id}`}>{event?.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Events Attending</h2>
        {user.eventsAttending.length > 0 ? (
          <ul className="list-disc list-inside">
            {user.eventsAttending.map(eventId => (
              <li key={eventId}>
                <Link to={`/explore/${eventId}`}>Event {eventId}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </div>
      <div className="flex justify-between">
        <button onClick={handleDelete} className="text-red-700 underline">
          Delete profile
        </button>
        <Link to={`/profile/${user.uid}/edit`} className="bg-blue-600 text-white px-4 py-2 rounded">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
