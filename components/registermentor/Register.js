import {useState} from 'react'

const Register = () => {
  const [steps, setSteps] = useState(1)
  const [form , setForm] = useState ({
    category: '',
    expertise:'',
    level:'',
    credits: '',
    company:'',
    title:'',
    companyStartDate:'',
    companyEndDate: '',
    school:'',
    degree:'',
    educationStartDate: '',
    educationEndDate: '',
    story: '',
    bio:'',
    linkedIn:'',
    facebook: '',
    website: ''
  })

  console.log(form)

  const handChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const plusStep = (e) => {
    if(steps>=1&&steps<=6) setSteps(steps+1)
  }

  const backStep = (e) => {
    if(steps>=1&&steps<=6) setSteps(steps-1)
  }

  return (
    <div className={wrapper}>
        <div className={container}>
          <div className="flex flex-col md:space-y-4">
            <h1 className="font-bold border-[1px] border-cyan-600 p-1">Session Details</h1>
            <h1>Experience</h1>
            <h1>Education</h1>
            <h1>About</h1>
            <h1>Photos</h1>
            <h1>General availability</h1>
          </div>
          {steps===1&&(
          <div className="flex flex-col md:pl-10 space-y-4">
            <a className='font-extralight'>step {steps} of 6</a>
            <h1>Select topics you would like to mentor on.</h1><br />
            <div className="flex flex-col space-y-2">
              <h1>Tell us about your top mentorship categories *</h1>
              <select name='category' onChange={handChange} value={form.category} className='rounded-md border-[1px] cursor-pointer px-[1rem] py-[.5rem] border-cyan-700' id="standard-select">
                <option value="Select">select</option>
                <option value="Leadership">Leadership</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>

            <div className="flex flex-col space-y-4">
              <h1>Add your expertise within the topic. *</h1>
              <select name='expertise' onChange={handChange} value={form.expertise} className='rounded-md border-[1px] cursor-pointer px-[1rem] py-[.5rem] border-cyan-700' id="standard-select">
                <option value="Select">select</option>
                <option value="Front end">Front end</option>
                <option value="Backend">Backend</option>
                <option value="Full stack">Full stack</option>
              </select>
            </div>

            <div className="flex flex-col space-y-4">
              <h1>What is your level of expertise? *</h1>
              <select name='level' onChange={handChange} value={form.level} className='rounded-md border-[1px] cursor-pointer px-[1rem] py-[.5rem] border-cyan-700' id="standard-select">
                <option value="Select">select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div className="flex flex-col space-y-4">
              <h1>Select credits *</h1>
              <select name='credits' onChange={handChange} value={form.credits} className='rounded-md border-[1px] cursor-pointer px-[1rem] py-[.5rem] border-cyan-700' id="standard-select">
                <option value="Select">select</option>
                <option value="Option 1">option 1</option>
                <option value="Option 2">option 2</option>
                <option value="Option 3">option 3</option>
              </select>
            </div>

            <br />
            <div className="flex space-x-[20rem] justify-end">
            <button disabled={!(form.category&&form.expertise&&form.level&&form.credits)} className='bg-mentmeBlue px-4 py-1 rounded-md text-white' onClick = {plusStep}>Next</button>
            </div>
          
          </div>
          )}
          
          {steps===2&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>Love it, tell us more about what you do.</h1><br />
            <div className="flex flex-col space-y-2">
              <h1>Company *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='company'
              value={form.company}
              onChange={handChange}
              />
              <h1>Your title *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='title'
              value={form.title}
              onChange={handChange}
              />
              <h1>Start date *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='companyStartDate'
              value={form.companyStartDate}
              onChange={handChange}
              />

              <h1>End date *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='companyEndDate'
              value={form.companyEndDate}
              onChange={handChange}
              />
              
            </div>
          
            <br />
            <div className="flex space-x-[20rem]">
            <h1 className='cursor-pointer' onClick = {backStep}> {'<'} Back</h1>
            <button disabled={!(form.company&&form.title&&form.companyStartDate&&form.companyEndDate)} className='bg-mentmeBlue px-4 py-1 rounded-md text-white' onClick = {plusStep}>Next</button>
            </div>
          </div>
          )}
          
          {steps===3&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>We would love to know about your education.</h1><br />
            <div className="flex flex-col space-y-2">
              <h1>school *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='school'
              value={form.school}
              onChange={handChange}
              />
              <h1>Your Degree *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='degree'
              value={form.degree}
              onChange={handChange}
              />
              <h1>Start date *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='educationStartDate'
              value={form.educationStartDate}
              onChange={handChange}
              />

              <h1>End date *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='educationEndDate'
              value={form.educationEndtDate}
              onChange={handChange}
              />
              
            </div>
          
            <br />
            <div className="flex space-x-[20rem]">
            <h1 className='cursor-pointer' onClick = {backStep}>{'<'} Back</h1>
            <button disabled={!(form.school&&form.degree&&form.educationStartDate&&form.educationEndDate)} className='bg-mentmeBlue px-4 py-1 rounded-md text-white' onClick = {plusStep}>Next</button>
            </div>
          </div>
          )}
          
          {steps===4&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>How you would introduce yourself.</h1><br />
            <div className="flex flex-col space-y-2">
              <h1>story *</h1>
              <textarea className='border-[1px] border-mentmeBlue px-3 py-3 h-[10rem] rounded-md' 
              name='story'
              value={form.story}
              onChange={handChange}
              />
              <h1>Bio *</h1>
              <textarea className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='bio'
              value={form.bio}
              onChange={handChange}
              />
              <h1>linkedIn *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='linkedIn'
              value={form.linkedIn}
              onChange={handChange}
              />

              <h1>Facebook *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='facebook'
              value={form.facebook}
              onChange={handChange}
              />

              <h1>Website *</h1>
              <input className='border-[1px] border-mentmeBlue px-3 py-3 rounded-md' 
              name='website'
              value={form.website}
              onChange={handChange}
              />
              
            </div>
          
            <br />
            <div className="flex space-x-[20rem]">
            <h1 className='cursor-pointer' onClick = {backStep}>{'<'} Back</h1>
            <button disabled={!(form.story&&form.bio&&form.linkedIn&&form.website&&form.website)} className='bg-mentmeBlue px-4 py-1 rounded-md text-white' onClick = {plusStep}>Next</button>
            </div>
          </div>
          )}
          
          {steps===5&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>Add some photos so mentees can know you better.</h1><br />
            <div className="flex flex-col space-y-2">
              <h1>Dispay Picture *</h1>
              <textarea className='border-[1px] border-mentmeBlue px-3 py-3 h-[10rem] rounded-md' 
              name='story'
              value={form.story}
              onChange={handChange}
              />
            </div>
          </div>
          )}
          
          {steps===6&&(
            <div>
            
            </div>
          )}
            
        </div>
    </div>
  )
}

export default Register

const wrapper = 'min-h-screen bg-white'
const container = 'pt-[8rem] md:px-[8rem] ml-[6rem] md:flex justify-start space-x-[2rem] items-start divide-x'