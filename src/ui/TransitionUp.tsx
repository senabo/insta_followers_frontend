import {Slide, SlideProps} from "@mui/material";

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionUp = (props: TransitionProps) => {
    return <Slide {...props} direction="up" />
}

export default TransitionUp
