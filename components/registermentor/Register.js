import {useState, useEffect} from 'react'

const Register = () => {

  const [err, setErr] = useState(false)

  let input = (prop) => `bg-mentmeblue ${err&&!prop?'border-red-400 border-[2px]':'border-mentmeBlue border-[1px]'} w-[20rem] px-3 py-[.8rem] rounded-md`
  let select = (prop) => `rounded-md cursor-pointer px-[1rem] py-[.8rem] ${err&&!prop?'border-red-400 border-[2px]':'border-mentmeBlue border-[1px]'}`
  let area = (prop) => `${err&&!prop?'border-red-400 border-[2px]':'border-mentmeBlue border-[1px]'} px-3 py-3 h-[10rem] rounded-md`
  let bio = (prop) => `${err&&!prop?'border-red-400 border-[2px]':'border-mentmeBlue border-[1px]'} px-3 py-3 rounded-md`
  let link = (prop) => `${err&&!prop?'border-red-400 border-[2px]':'border-mentmeBlue border-[1px]'} px-10 py-3 rounded-md`
  
  const [steps, setSteps] = useState(1)
  
  const [exp, setExperience] = useState({
    company: '',
    title:'',
    start:'',
    end:'',
  })
  
  const [education, setEducation] = useState ({ 
    school: '',
    degree: '',
    start: '',
    end: ''
  })

  const [form , setForm] = useState ({
    category: '',
    expertise:'',
    level:'',
    credits: '',
    experience: [],
    education: [],
    story: '',
    bio:'',
    linkedIn:'',
    facebook: '',
    website: '',
    dp: null,
    gallery: '',
  })


  console.log(form, input)

  const handChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handExp = (e) => {
    setExperience({...exp, [e.target.name]:e.target.value})
  }
  const handEdu = (e) => {
    setEducation({...education, [e.target.name]:e.target.value})
  }

  const plusStep = (e) => {
    if((steps===1&&form.category&&form.expertise&&form.level&&form.credits)||(steps===4&&form.story&&form.bio&&form.linkedIn&&form.website&&form.website)||(steps===5&&form.dp&&form.gallery)){
      setErr(false)
      setSteps(steps+1)
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }) 
    }else{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setErr(true)
    }
  }

  const backStep = (e) => {
    if(steps>=1&&steps<=6) setSteps(steps-1)
  }

  return (

    <div className={wrapper}>
        <div className={container}>

          {/* Left side */}
          <div className="md:space-y-4">
            <h1 className="font-bold border-[1px] border-cyan-600 p-1 rounded-md">Session Details</h1>
            <h1>Experience</h1>
            <h1>Education</h1>
            <h1>About</h1>
            <h1>Photos</h1>
            <h1>General availability</h1>
          </div>
          {/* End of left side */}

          {/* Step 1 of step 6 */}
          {steps===1&&(
          <div className="flex flex-col md:pl-10 space-y-4">
            <a className='font-extralight'>step {steps} of 6</a>
            <h1>Select topics you would like to mentor on.</h1><br />

            {err&&<h1 className={warning}>Please Fill up all the fields to proceed</h1>}
            {/* category */}
            <div className="flex flex-col space-y-2">
              <h1>Tell us about your top mentorship categories *</h1>
              <select name='category' onChange={handChange} value={form.category} className={select(form.category)} id="standard-select">
                <option value="Select">select</option>
                <option value="Leadership">Leadership</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
            {/* category */}

            {/* expertise */}
            <div className="flex flex-col space-y-1">
              <h1>Add your expertise within the topic. *</h1>
              <select name='expertise' onChange={handChange} value={form.expertise} className={select(form.expertise)} id="standard-select">
                <option value="Select">select</option>
                <option value="Front end">Front end</option>
                <option value="Backend">Backend</option>
                <option value="Full stack">Full stack</option>
              </select>
            </div>
            {/* expertise */}

            {/* level of expertise */}
            <div className="flex flex-col space-y-1">
              <h1>What is your level of expertise? *</h1>
              <select name='level' onChange={handChange} value={form.level} className={select(form.level)} id="standard-select">
                <option value="Select">select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            {/* level of expertise */}

            {/* Credits */}
            <div className="flex flex-col space-y-1">
              <h1>Select credits *</h1>
              <select name='credits' onChange={handChange} value={form.credits} className={select(form.credits)} id="standard-select">
                <option value="Select">select</option>
                <option value="Option 1">option 1</option>
                <option value="Option 2">option 2</option>
                <option value="Option 3">option 3</option>
              </select>
            </div>
            {/* Credits */}

            <br />
            <div className={buttonContainer}>
            <button className={button} onClick = {plusStep}>Continue</button>
            </div>
          
          </div>
          )}
          
          {steps===2&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>Love it, tell us more about what you do.</h1><br />
            {err&&<h1 className={warning}>Please Fill up all the fields to proceed</h1>}

            <div className="flex flex-col space-y-2">
              {/* company */}
              <h1>Company *</h1>
              <input className={input(exp.company)} 
              placeholder={(err&&!exp.company)?'Fill up this': ''}
              name='company'
              value={exp.company}
              onChange={handExp}
              />
              {/* company */}

              {/* title */}
              <h1>Your title *</h1>
              <input className={input(exp.title)} 
              placeholder={(err&&!exp.title)?'Fill up this': ''}
              name='title'
              value={exp.title}
              onChange={handExp}
              />
              {/* title */}

              {/* start */}
              <h1>Start date *</h1>
              <input className={input(exp.start)} 
              type='date'
              name='start'
              value={exp.start}
              onChange={handExp}
              />
              {/* start */}

              {/* end */}
              <h1>End date *</h1>
              <input className={input(exp.end)}  
              type='date'
              name='end'
              value={exp.end}
              onChange={handExp}
              />
              {/* end */}


              <button 
                disabled={!(exp.company&&exp.title&&exp.start&&exp.end)}
                onClick={()=>{
                setForm({...form, experience:[...form.experience, exp]})
                setExperience({company: '',
                title:'',
                start:'',
                end:'',})}}>
                + Add another experience
              </button>
            </div>
          
            <br />
            <div className={buttonContainer}>
            <h1 className='cursor-pointer' onClick = {backStep}> {'<'} Back</h1>
            <button className={button}
             
             onClick = {() =>{ 
               if(exp.company&&exp.title&&exp.start&&exp.end){
                setForm({...form, experience:[...form.experience, exp]})
                setErr(false)
                setExperience({company: '',
                title:'',
                start:'',
                end:''})
                setSteps(steps+1)
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })}else{
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  })
                  setErr(true)
                }
              }}
                >
                Continue
                </button>
            
            </div>
          </div>
          )}
          
          {steps===3&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>Love it, tell us more about what you do.</h1><br />
            {err&&<h1 className={warning}>Please Fill up all the fields to proceed</h1>}
            <div className="flex flex-col space-y-2">
              {/* school */}
              <h1>School/Platform *</h1>
              <input className={input(education.school)} 
              placeholder={(err&&!education.school)?'Fill up this': ''}
              name='school'
              value={education.school}
              onChange={handEdu}
              />
              {/* school */}

              {/* degree */}
              <h1>Your degree *</h1>
              <input className={input(education.degree)} 
              placeholder={(err&&!education.degree)?'Fill up this': ''}
              name='degree'
              value={education.degree}
              onChange={handEdu}
              />
              {/* degree */}

              {/* start */}
              <h1>Start date *</h1>
              <input className={input(education.start)} 
              type='date'
              name='start'
              value={education.start}
              onChange={handEdu}
              />
              {/* start */}

              {/* end */}
              <h1>End date *</h1>
              <input className={input(education.end)} 
              type='date'
              name='end'
              value={education.end}
              onChange={handEdu}
              />
              {/* end */}

              <button
                disabled={!(education.school&&education.degree&&education.start&&education.end)}
                onClick={()=>{
                setForm({...form, education:[...form.education, education]})
                setEducation({school: '',
                degree:'',
                start:'',
                end:'',})}}>
                + Add another education
              </button>
            </div>
          
            <br />
            <div className={buttonContainer}>
            <h1 className='cursor-pointer' onClick = {backStep}> {'<'} Back</h1>
            <button className={button}
             
             onClick = {() =>{ 
               if(education.school&&education.degree&&education.start&&education.end){
                setErr(false)
                setForm({...form, education:[...form.education, education]})
                setEducation({school: '',
                degree:'',
                start:'',
                end:''})
                setSteps(steps+1)
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })}else{
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  })
                  setErr(true)
                }
              }}
                >
                Continue
                </button>
            
            </div>
          </div>
          )}
          
          {/* Mentor introduction here */}

          {steps===4&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>How would you introduce yourself?</h1><br />
            {err&&<h1 className={warning}>Please Fill up all the fields to proceed</h1>}
            <div className="flex flex-col space-y-2">
              <h1>story *</h1>
              <textarea className={area(form.story)}
              
              placeholder={(err&&!form.story)?'Fill up this': ''}
              name='story'
              value={form.story}
              onChange={handChange}
              />
              <h1>Bio *</h1>
              <textarea className={bio(form.bio)} 
              placeholder={(err&&!form.bio)?'Fill up this': ''}
              name='bio'
              value={form.bio}
              onChange={handChange}
              />

              <div className={social}>
                <h1>linkedIn *</h1>
                <div className='flex-grow'></div>
                <input className={link(form.linkedIn)} 
                placeholder={(err&&!form.linkedIn)?'Fill up this': ''}
                name='linkedIn'
                value={form.linkedIn}
                onChange={handChange}
                />
              </div>

              <div className={social}>
                <h1>Facebook *</h1>
                <div className='flex-grow'></div>
                <input className={link(form.facebook)}
                placeholder={(err&&!form.facebook)?'Fill up this': ''}
                name='facebook'
                value={form.facebook}
                onChange={handChange}
                />
              </div>

              <div className={social}>
                <h1>Website *</h1>
                <div className='flex-grow'></div>
                <input className={link(form.website)}
                placeholder={(err&&!form.website)?'Fill up this': ''}
                name='website'
                value={form.website}
                onChange={handChange}
                />
              </div>
              
            </div>
          
            <br />
            <div className={buttonContainer}>
            <h1 className='cursor-pointer' onClick = {backStep}>{'<'} Back</h1>
            <button className={button} onClick = {plusStep}>Continue</button>
            </div>
          </div>
          )}
          

          {/* Image upload here */}

          {steps===5&&(
          <div className="flex flex-col md:pl-10 space-y-4">
          <a className='font-extralight'>step {steps} of 6</a>
            <h1>Add some photos so mentees can know you better.</h1><br />
            {err&&<h1 className={warning}>Please Fill up all the fields to proceed</h1>}
            <div className="flex flex-col space-y-2">
              <h1>Put a face to your name *</h1>
              <input 
              type='file'
              placeholder='upload your image here'
              className='border-[1px] border-mentmeBlue h-[12rem] w-[10rem] rounded-md ' 
              name='dp'
              value={form.dp}
              onChange={handChange}
              />

              <h1>Upload some photos to show in your gallery *</h1>
              <input 
              type='file'
              placeholder='upload your image here'
              className='border-[1px] border-mentmeBlue h-[10rem] w-[12rem] rounded-md' 
              name='dp'
              value={form.dp}
              onChange={handChange}
              />
              <button>
                + Add more photos
              </button>
              
              <div className={buttonContainer}>
                <h1 className='cursor-pointer' onClick = {backStep}>{'<'} Back</h1>
                <button className={button} onClick = {() => setSteps(steps+1)}>Continue</button>
              </div>

            </div>
          </div>
          )}
          
          {steps===6&&(
            <div>
              <div>
                <div className='flex items-center space-x-10 rounded-md'>
                  <input type='checkbox' className='bg-black'
                  /><h1>Sunday</h1>
                </div>
              </div>
              <div className={buttonContainer}>
                <h1 className='cursor-pointer' onClick = {backStep}>{'<'} Back</h1>
                <button className={button} onClick = {plusStep}>Continue</button>
              </div>
            </div>
          )}
            
        </div>
    </div>
  )
}

export default Register

const wrapper = 'min-h-screen mb-[2rem]'
const container = 'pt-[8rem] md:px-[10rem] md:space-x-[5rem] md:ml-[6rem] md:flex justify-start space-x-[2rem] space-y-2 items-start divide-x'
const button = 'bg-mentmeBlue px-4 py-3 rounded-md text-white'
const buttonContainer = 'flex space-x-[15rem] justify-end items-center'
const warning = `text-red-400 text-xl`
const social = 'flex pt-[1rem] items-center'