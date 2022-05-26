import { Button, TextField } from "@mui/material"


const Login = () => {
  return (
    <div className='min-h-screen'>
        <div className='pt-[8rem] md:px-[8rem] flex justify-center items-center'>
            <div className='bg-white w-[25rem] min-h-[30rem] space-y-5 border-[.1rem] rounded-md border-cyan-500 px-12 py-10'>
                <h1 className='text-xl text-green-600'>Sign Up</h1>
                <TextField
                fullWidth 
                label = 'Name'
                />
                <TextField 
                fullWidth
                label= 'email'
                />
                <TextField 
                fullWidth
                label= 'number'
                />
                <TextField 
                fullWidth
                label= 'password'
                />
                <Button variant="contained" className="!bg-green-600">
                    Create your account
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Login