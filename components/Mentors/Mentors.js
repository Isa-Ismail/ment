import React from 'react'
import DropdownSelect from './DropdownSelect'
import Divider from '@mui/material/Divider'
import MentorCard from '../Home/DiscoverTopMentors/MentorCard'
import { mentors } from '../../data/mentors'
import {Grid} from '@mui/material'

const Mentors = () => {
  return (
    <div className='min-h-screen bg-white'>
        <div className='pt-[8rem] px-[8rem]'>
            <div className='md:flex'>
                <DropdownSelect cat = 'Category'/>
                <DropdownSelect cat = 'Expertise'/>
                <DropdownSelect cat = 'Sort by'/>
                <DropdownSelect cat = 'Rating'/>
            </div>
            <Divider></Divider>
            <div className='pt-[2rem]'>
                <Grid container spacing={3}>
                    {mentors.map((mentor) => (
                        <>
                        <Grid item md = {3}>
                            <MentorCard key={mentor.id} mentor={mentor} />
                        </Grid>
                        </>
                    ))}
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default Mentors