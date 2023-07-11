import { selectAllPartners } from "./partnerSlice";

const Partner = ({ partner }) => {
   
    if (partner) {
        const { id, name, image, featured, description } = partner;
        return (
            <>
                <img src={image} alt={name} style={{ width: '150px' }}  />
                <div className='m-4'>
                    <h5 className='fw-bold'></h5>
                    {description}
                </div>
            </>
        );
    }
    return null;
};

export default Partner;