import React from 'react';
import CourseCard from './components/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../Header/components/Button/Button';

function Courses() {
    return(
        <>
            <div className='Courses'>
                <div className='SearchBar'>
                    <SearchBar />
                    <Button buttonText={'Add new course'}/>
                </div>
                <CourseCard />
            </div>
        </>
    )
}

export default Courses;