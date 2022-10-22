import React from 'react'
import IconState from './IconState'

export default {
    title: "IconState",
    component: IconState
}

export const IconStateExample = () => (
    <IconState
        state={ 'sunny' }
        contextOptions={{ size: '5em' }}
    />
)