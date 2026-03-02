
const UserCard = ({user}) => {
    const {firstName, lastName, age, photoURL, gender, about } = user;
    
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src={photoURL}
                    alt="photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{age + " , " + gender}</p>
                <p>{about}</p>
                <div className="card-actions justify-center my-5">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;