'use client';
import { useMediaQuery } from "react-responsive";
import './HorizontalMenu.css';


export default function HorizontalMenu(props: any) {
  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

  return isMobile && (
    <div className="scrollmenu">
      <a data-toggle="tab" onClick={() => props.openTab('register')} href="#home">Register</a>
      <a data-toggle="tab" onClick={() => props.openTab('plan')} href="#news">Plan</a>
      <a data-toggle="tab" onClick={() => props.openTab('note')} href="#contact">Note</a>
      <a data-toggle="tab" onClick={() => props.openTab('student')} href="#about">Student</a>
      <a data-toggle="tab" onClick={() => props.openTab('teacher')} href="#support">Teacher</a>
      <a data-toggle="tab" onClick={() => props.openTab('test')} href="#blog">Test</a>
      <a data-toggle="tab" onClick={() => props.openTab('exams')} href="#tools">Exams</a>
      <a data-toggle="tab" onClick={() => props.openTab('extra')} href="#base">Extra</a>
      <a data-toggle="tab" onClick={() => props.openTab('admission')} href="#custom">Application</a>
      <a data-toggle="tab" onClick={() => props.openTab('fee')} href="#more">School Fee</a>
      <a data-toggle="tab" onClick={() => props.openTab('messages')} href="#logo">Messages</a>
      <a data-toggle="tab" onClick={() => props.openTab('pta')} href="#friends">PTA</a>
      <a data-toggle="tab" onClick={() => props.openTab('report')} href="#partners">Report</a>
      <a data-toggle="tab" onClick={() => props.openTab('people')} href="#people">People</a>
      <a data-toggle="tab" onClick={() => props.openTab('work')} href="#work">Work</a>
    </div>
  )
}

export function DynamicHorizontalMenu(props: any) {

  return (
    <div className="scrollmenu" style={{ margin: 'auto' }}>
      {
        props.tabNames.map((tabName: string, index: number) => {
          return <a key={index} data-toggle="tab" onClick={() => props.openTab(tabName.toLowerCase())}>{tabName.toUpperCase()}</a>
        })
      }
    </div>
  )
}