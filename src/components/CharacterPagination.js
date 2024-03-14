import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {
    const {prevPage,nextPage} = useSelector(state => state.characters);
    const [,setQuery] = useSearchParams({page:'1'});

    const prev=()=>{
        setQuery(prev1 => {
            prev1.set('page',`${+prev1.get('page')-1}`)
            return prev1
        })
    }

    const next=()=>{
setQuery(next1=>{
    next1.set('page',`${+next1.get('page')+1}`)
    return next1

})
    }

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {CharacterPagination};