//this section will restart the filter when there is change in path
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

export const ScrollToTop = () => {
    const {pathname} = useLocation()

    useEffect(()=>{
      window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathname])

  return null
}
