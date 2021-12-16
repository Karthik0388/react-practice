import React from 'react'
import Classbasedrefs from './ClassBasedRefs'
import FunctionalBased from './FunctionalBased'
import VideoPlayer from './Components/VideosPlayerComp/VideoPlayer';
import UnControlledComp from './Components/Forms/UnControlledComp'
import ControlledComp from './Components/Forms/ControlledComp';
import MultiVideoPlayer from './Components/MultiVideoPlayer/MultiVideoPlayer';
import HandlingFile from './Components/Forms/HandlingFile';
import CountryComp from './Components/Forms/CountryComp';
import RadioButtonComp from './Components/Forms/RadioButtonComp';
import Complifecyclemethod from './Components/ComponentLifeCycleMethods/CompLifeCycleMethod';
import CheckBoxComp from './Components/Forms/CheckBoxComp';
import TextAreaComp from './Components/Forms/TextAreaComp';

const RootComponent = () => {
    return (
        <div>
            {/* <Classbasedrefs/>
            <FunctionalBased/> */}
            {/* <VideoPlayer/> */}
            {/* <UnControlledComp/> */}
            {/* <ControlledComp/> */}
            {/* <MultiVideoPlayer/> */}
            {/* <HandlingFile/> */}
            {/* <CountryComp/> */}
            {/* <RadioButtonComp/> */}
            {/* <Complifecyclemethod/> */}
            <CheckBoxComp/>
            {/* <TextAreaComp/> */}
        </div>
    )
}

export default RootComponent
