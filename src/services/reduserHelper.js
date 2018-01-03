export const mapMetadataRequest = state => {
    return { ...state, metadata: {isProcessing: true} };
};

export const getMetadata = (action, reducerName) => {
    let metadata = {
        isProcessing: false
    };
    if (action[reducerName].metadata && action[reducerName].metadata.error) {
        metadata.error = action[reducerName].metadata.error;
    }
    return metadata;
};

export const mapMetadataSuccess = (state, action, reducerName) => {
    return { ...state, ...action[reducerName], metadata: getMetadata(action, reducerName) };
};

export const mapMetadataFailure = (state, action, reducerName) => {
    return { ...state, metadata: getMetadata(action, reducerName) };
};
