import React from 'react';
import CourseCard from './components/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

function Courses() {
    return(
        <>
            <div className='Courses'>
                <div className='SearchBar'>
                    <SearchBar />
                </div>
                <CourseCard />
            </div>
        </>
    )
}

export default Courses;