import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackBtn } from './style';
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

export const Back = () => {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: 'left'}}>
            <BackBtn onClick={() => navigate(-1)}>
                <ArrowSmLeftIcon className="icon"/>
                <span>Back</span>
            </BackBtn>
        </div>
    );
}
