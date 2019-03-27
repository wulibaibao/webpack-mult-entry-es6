
import './index.scss'
let pr = function( x ) {
    return new Promise(
        ( resolve , reject ) => {
            x > 10 ? resolve( 1111 ) : reject( 2222)
        }
    )
}

let b = 10 

pr(b)
.then( console.log )
.catch ( console.log )