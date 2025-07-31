import React, { ReactNode } from 'react'
import Section from '../Section'

interface TabPaneProps {
    children: ReactNode
}

const TabPane: React.FC<TabPaneProps> = ({ children }) => {
    return (
        <Section className='border border-[#CCCCCC] rounded-lg'>
            <Section>
                {children}
            </Section>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Section>
    )
}

export default TabPane