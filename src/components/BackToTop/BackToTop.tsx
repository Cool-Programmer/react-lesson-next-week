import { Button } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import './BackToTop.css';

function BackToTop({handleHeaderRefClick}: any) {
    return (
        <div className="back-to-top">
            <Button onClick={() => handleHeaderRefClick()} className="bac-to-top-btn" variant="contained" color="primary">
                <ArrowCircleUpIcon />
            </Button>
        </div>
    )
}

export default BackToTop;