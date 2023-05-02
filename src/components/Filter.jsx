import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import { FormLabel, Input } from '@chakra-ui/react';

export default function Filter() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);

    const onChange = ({target}) => {
        dispatch(setFilter(target.value));
    }

    return   <>
        <FormLabel>Find contact by name</FormLabel>
        <Input type="text" onChange={onChange} placeholder='Enter name' value={filterValue}/>
    </>
}

