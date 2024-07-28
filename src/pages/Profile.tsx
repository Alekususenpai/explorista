import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { deleteUser } from '../features/users/userSlice';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = useSelector((state: RootState) =>
    state.user.value.find(user => user.id === Number(userId))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return <div className="text-center mt-20">User not logged in</div>;
  }

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    navigate('/explore');
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-8 rounded-lg shadow-lg">
      <img src={user.profileImage} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-center mb-4">{user.name}</h1>
      <p className="text-center text-gray-700 mb-4">Bio: {user.bio}</p>
      <p className="text-center text-gray-700 mb-4">{user.email}</p>
      <div className="text-center mb-4">
        {user.isHost ? <span className="badge bg-pink-600 text-white px-2 py-1 rounded">Host</span> : <span className="badge bg-pink-600 text-white px-2 py-1 rounded">Attendee</span>}
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Events Hosted</h2>
        {user.eventsHosted.length > 0 ? (
          <ul className="list-disc list-inside">
            {user.eventsHosted.map(eventId => (
              <li key={eventId}>
                <Link to={`/explore/${eventId}`}>Event {eventId}</Link>
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
        <Link to={`/edit-profile/${user.id}`} className="bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</Link>
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete Profile</button>
      </div>
    </div>
  );
};

export default Profile;
