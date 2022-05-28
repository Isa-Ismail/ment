import { Button, TextField } from "@mui/material"
import {useState} from 'react'


const Register = () => {
  const [form, setForm]=useState({name:'', email:'',number:'',password:''})
  const [steps, setSteps] = useState(1)
  const handChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }
  const handStep = (e) => {
    setSteps(steps+1)
  }
  return (
    <div className={wrapper}>
        <div className={container}>
          {steps===1&&(<>step 1</>)}
          {steps===2&&(<>step 2 </>)}
          {steps===3&&(<>step 3</>)}
          {steps===4&&(<>step 4</>)}
          {steps===5&&(<>step 5</>)}
          {steps===6&&(
            <div className={signupform}>
            <h1 className='text-xl text-green-600'>Sign Up</h1>
            <TextField
            onChange = {handChange}
            fullWidth 
            name='name'
            value={form.name}
            label = 'Name'
            />
            <TextField 
            onChange = {handChange}
            value={form.email}
            name='email'
            fullWidth
            label= 'email'
            />
            <TextField 
            onChange = {handChange}
            value= {form.number}
            fullWidth
            name='number'
            label= 'number'
            />
            <TextField 
            onChange = {handChange}
            value={form.password}
            fullWidth
            name='password'
            label= 'password'
            />
            <Button variant="contained" className="!bg-green-600">
                Create your account
            </Button>
        </div>
          )}
            
        </div>
    </div>
  )
}

export default Register

const wrapper = 'min-h-screen'
const container = 'pt-[8rem] md:px-[8rem] flex justify-center items-center'
const signupform = 'bg-white w-[25rem] min-h-[30rem] space-y-5 border-[.1rem] rounded-md border-cyan-500 px-12 py-10'