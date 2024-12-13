import Card from './content-card.jsx';
import propTypes from 'prop-types';

const url1 = "https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXIavqmE8KsI7iU6cnqt-x5P8o2XyS6xkggH3wRGNVlOvu46imLAN4Cdpn7sfkMG5XSpXh1LwQhCfkrEH0mdbE5txqAvkTdYix9oqCJiA04voqDun0T5ab5BCqtYueiQ4QFI.jpg?r=690";

const url2 = "https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHOPfc4JOX_x2agoV_2khsbatOFXZNMdAjVxDh6mPjWbSVYbjzunwVPOz7_fktM2jqvN5cviR4fC5yq0W_audtIb7UdukXU0fashTZtd-sEs-HiE8R3h8jGFSPhwi2SpHuX.jpg?r=45c";

const url3 = 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT3GEIc54_wTU5sw-7lV2UUEgwl_TJKzmjLAjQPgHCTp6ebmn82QtuUIgsdF38RCJTxbBzXSkBVrROrfGQ1b0HsrOAjADKIcflM.jpg?r=cae';

const url4 = 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABffxT93i4-rSihrqY88xvoTK_L6Qu5Hf__Vm9fNlmjoqXkFYfkVTsXv27m1qP-wany7rJfGSwDxp_pcMeWKgdhKaf6ce10t_cW4.jpg?r=871';

const url5 = 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ0uSfximbPMGkYaZ5dmRC5KNqa4-cjQwg3d8XEWkV_BYw1N6N9amX8qZ1dl-EGvbLQ90vfDL0_MI9iG_jNFIEHZ2Q_ctYU3p3o.jpg?r=6f7';

function Continue(props){
  return (
    <div>
      <div className='card-container-header'>Continue Watching for {props.user}</div>
      <div className='card-container'>
        <Card contentURL={url1} contentName='Business Proposal' ageRating='13+' isMovie={false}/>
        <Card contentURL={url2} contentName='All of Us are Dead' ageRating='16+' isMovie={false} season='1 Season'/>
        <Card contentURL={url3} contentName='Lovely Runner' ageRating='13+' isMovie={false}/>
        <Card contentURL={url4} contentName='Animal' ageRating='18+' isMovie={true}
        duration='3h 24m'/>
        <Card contentURL={url5} contentName='Jawan' ageRating='13+' isMovie={true} duration='2h 50m'/>
      </div>
    </div>
  );
}
Continue.defaultProps = {
  user : 'Guest',
};
export default Continue;