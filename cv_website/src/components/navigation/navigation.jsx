import React from 'react'
import './navigation.css'
import {RiHomeLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {HiOutlineCode} from 'react-icons/hi'
import {BiGame} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'

const navigation = () => {
  return (
    <nav>
        <a href='#header'><RiHomeLine/></a>
        <a href='#about'><AiOutlineUser/></a>
        <a href='#experience'><BsBriefcase/></a>
        <a href='https://react-icons.github.io/react-icons'><HiOutlineCode/></a>
        <a href='https://react-icons.github.io/react-icons'><BiGame/></a>
        <a href='https://react-icons.github.io/react-icons'><BsTelephone/></a>
    </nav>
  )
}

export default navigation