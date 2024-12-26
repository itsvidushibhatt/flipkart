import React,{useState} from 'react'

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="col-md-9">
          <h4 className='fw-bold'>Change Password</h4>
          <form className="mt-4 fs-small">
            <div className="">
              <label htmlFor="currentPassword" className="form-label">Current Password</label>
              {/* <div className="input-group"> */}
                <input 
                  type={showCurrentPassword ? 'text' : 'password'}
                  className="form-control fs-small shadow-none w-50"
                  placeholder="current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <span className='hideshowpasswordIcon' style={{position:'relative',left:'25rem', bottom:'27px' }}>{showCurrentPassword ? <i class='bx bx-hide fs-5' onClick={()=>setShowCurrentPassword(!showCurrentPassword)}></i> : <i class='bx bx-show fs-5'  onClick={()=>setShowCurrentPassword(!showCurrentPassword)}></i>}</span> 
              {/* </div> */}
            </div>

            <div className="">
              <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="new Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span className='hideshowpasswordIcon' style={{position:'relative',left:'25rem', bottom:'27px' }}>{showNewPassword ? <i class='bx bx-hide fs-5' onClick={()=>setShowNewPassword(!showNewPassword)}></i> : <i class='bx bx-show fs-5'  onClick={()=>setShowNewPassword(!showNewPassword)}></i>}</span> 
              {/* <ul className="list-unstyled mt-2 text-success">
                <li>✔ Minimum 8 characters</li>
                <li>✔ 1 Capital letter (A-Z)</li>
                <li>✔ 1 Special Character (@#$%!^&*)</li>
                <li>✔ 1 Number</li>
              </ul> */}
            </div>

            <div className="mb-1">
              <label htmlFor="confirmPassword" className="form-label">Re-type New Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
               <span className='hideshowpasswordIcon' style={{position:'relative',left:'25rem', bottom:'27px' }}>{showConfirmPassword ? <i class='bx bx-hide fs-5' onClick={()=>setShowConfirmPassword(!showConfirmPassword)}></i> : <i class='bx bx-show fs-5'  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}></i>}</span> 
            </div>

            <button type="button" className="btn btn-primary fs-small">Change Password</button>
          </form>
        </div>
    </>
  )
}
