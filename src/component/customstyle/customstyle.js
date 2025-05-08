const CustomStyle = {
    CustomSelectStyle : {
        option: (provided, state) => (Object.assign({ provided }), {
            textAlign: "left",
            // textAlign: "left",  
            color: '#000',
            padding: 10,
            // fontSize: "12px",
            background : "#fff",
            '&:hover': {
                background: '#E4D161',
                color: '#fff',
            }
        }),
        singleValue: () => ({
            textAlign : "left",
            position: 'absolute',
            padding : '5px 20px'
        }),
        placeholder: () => ({
            textAlign : "left",
            position : "absolute",
            padding : '5px 20px',
            color : "#6c757d",
            fontSize : window.matchMedia("(max-width: 548px)").matches && '1.5vh'
        })
        
    }
}
export default CustomStyle