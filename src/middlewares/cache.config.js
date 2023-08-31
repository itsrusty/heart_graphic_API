import getExpeditiousCache from "express-expeditious"

// objeto donde ponemos la config por defecto
const defaultOptions = {
    namespace:"expresscache", // todo: el nombre o la key donde guardaremos en memoria
    defaultTtl: "20 days",
    statusCodeExpires: {
        404: "5 minutes",
        500: 0 
    }
}

const cacheInit = getExpeditiousCache(defaultOptions);

export default cacheInit