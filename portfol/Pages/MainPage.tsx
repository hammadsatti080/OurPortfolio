import About from '@/Component/Homescreen/About'
import Contactsec from '@/Component/Homescreen/Contactsec'
import Header from '@/Component/Homescreen/Header'
import Projects from '@/Component/Homescreen/Project'
import Review from '@/Component/Homescreen/Review'
import Skill from '@/Component/Homescreen/Skill'
import Stat from '@/Component/Homescreen/Stat'
import React from 'react'

export default function MainPage() {
    return (
        <div>
            <Header />
            <About />
            <Stat />
            <Skill />
            <Projects />
            <Contactsec />
            <Review />
        </div>
    )
}
