import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const PasswordChange = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePasswordChange = async () => {

        try {
            await axios.patch(
                BASE_URL + "/profile/password",
                { oldPassword, newPassword },
                { withCredentials: true }
            );
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                dispatch(removeUser());
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div className='flex justify-center my-20'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">Update Password</h2>
                    <div>
                        <fieldset className="fieldset my-5">

                            <label className='font-semibold py-2'>Old Password : </label>
                            <input
                                type="password"
                                className="input"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />

                            <label className='font-semibold py-2'>New Password : </label>
                            <input
                                type="password"
                                className="input"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </fieldset>

                    </div>
                    <div className="card-actions justify-center my-2">
                        <button className="btn btn-primary w-full" onClick={handlePasswordChange}>Update</button>
                    </div>

                    {showToast && <div className="toast toast-top toast-center">
                        <div className="alert alert-success">
                            <span>Password Updated Successfully</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default PasswordChange;