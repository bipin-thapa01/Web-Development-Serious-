import Cards from './Cards.jsx';

const container1 = [{
    key: 1,
    url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXIavqmE8KsI7iU6cnqt-x5P8o2XyS6xkggH3wRGNVlOvu46imLAN4Cdpn7sfkMG5XSpXh1LwQhCfkrEH0mdbE5txqAvkTdYix9oqCJiA04voqDun0T5ab5BCqtYueiQ4QFI.jpg?r=690',
    contentName: 'Business Proposal',
    ageRating: '13+',
    isMovie:  false,
    duration: '',
    season: 'Limited Series',
    quality: 'HD',
  },
  {
    key: 2,
    url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHOPfc4JOX_x2agoV_2khsbatOFXZNMdAjVxDh6mPjWbSVYbjzunwVPOz7_fktM2jqvN5cviR4fC5yq0W_audtIb7UdukXU0fashTZtd-sEs-HiE8R3h8jGFSPhwi2SpHuX.jpg?r=45c',
    contentName: 'All of Us are Dead',
    ageRating: '16+',
    isMovie:  false,
    duration: '',
    season: '1 Season',
    quality: 'HD',
  },
  {
    key: 3,
    url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT3GEIc54_wTU5sw-7lV2UUEgwl_TJKzmjLAjQPgHCTp6ebmn82QtuUIgsdF38RCJTxbBzXSkBVrROrfGQ1b0HsrOAjADKIcflM.jpg?r=cae',
    contentName: 'Lovely Runner',
    ageRating: '13+',
    isMovie:  false,
    duration: '',
    season: 'Limited Series',
    quality: 'HD',
  },
  {
    key: 4,
    url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABffxT93i4-rSihrqY88xvoTK_L6Qu5Hf__Vm9fNlmjoqXkFYfkVTsXv27m1qP-wany7rJfGSwDxp_pcMeWKgdhKaf6ce10t_cW4.jpg?r=871',
    contentName: 'Animal',
    ageRating: '18+',
    isMovie:  true,
    duration: '3h 24m',
    season: '',
    quality: 'HD',
  },
  {
    key: 5,
    url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ0uSfximbPMGkYaZ5dmRC5KNqa4-cjQwg3d8XEWkV_BYw1N6N9amX8qZ1dl-EGvbLQ90vfDL0_MI9iG_jNFIEHZ2Q_ctYU3p3o.jpg?r=6f7',
    contentName: 'Jawan',
    ageRating: '13+',
    isMovie:  true,
    duration: '2h 50m',
    season: '',
    quality: 'HD',
  },
];

const container2 = [{
  key: 6,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVR0ECWy5i8yvq-FTVzHBp6p6nnz91geIetbjoEaDi14Dw5gcNx7QSxWvCOc1rd3gdodK9I6GiAONTb8WqhFEiEdDn1haF85XspjMfmXq2CGZqRkx6lRZNoaRPHBvxWgd81RpJzbMF6uNW9rS25SBCGs5ecmxF8jiNaiwtue4i-3_lBDQF0yDPB6tXSQBWGrB3QU8WjmLfVZOjpqGUw0-KmKsmjVl6sEqS4OHsztl3vtDMg-NWfPej-_-I6UxiEdA_cQ2fWAt6Y5cWL-7hh7_UjnWolm.jpg?r=bbc',
  contentName: 'Lucky Bhaskar',
  ageRating: '10+',
  isMovie:  true,
  duration: '2h 27m',
  season: '',
  quality: 'HD',
},
{
  key: 7,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeeo0Gq-M61q4QTwTMmm-zIaleBmh9XS3Zw5xp9-4z7onthqa9k7E3e6oBVncONdnkUnEjeVAEDJ-nKZcDnEoGUJ5tO53ENwxJE.jpg?r=0d3',
  contentName: 'Guntur Kaarani',
  ageRating: '16+',
  isMovie:  true,
  duration: '2h 42m',
  season: '',
  quality: 'HD',
},
{
  key: 8,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYR0m-52LSrRz6iUx_0z1Z8TluC_8luM_wcA4hsrdEoapgxvHW_-XXt3_Ge_0oR--WRCwgxat-0xouB2gOeL7RnvbWDGju-OoXw.jpg?r=453',
  contentName: 'Devara',
  ageRating: '16+',
  isMovie:  true,
  duration: '2h 52m',
  season: '',
  quality: 'HD',
},
{
  key: 9,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVDeLQSSVG9Qd1Ku34YFBAnT-aiYyz63Hvf_4vKk2rvIg0saKos1U4hnQxkhQwejtwjAhyoQYENuq53F1m1LaEX7p87YmfjX2PQ.jpg?r=0a7',
  contentName: 'OMG',
  ageRating: '16+',
  isMovie:  true,
  duration: '2h 35m',
  season: '',
  quality: 'HD',
},
{
  key: 10,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWpIi1kAVruLqj0EMnclkakj98TSn5gK-KsMxxRDD1fvXKHVw3idBsq3KKCtfBDoXrG0gFXe6_j_pyK6ci_L_dDi5M9iK672bgo.jpg?r=69e',
  contentName: 'Shaitaan',
  ageRating: '16+',
  isMovie:  true,
  duration: '2h 8m',
  season: '',
  quality: 'HD',
},
];

const container3 = [{
  key: 11,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcwWqH31_eJ6zU1QooHYYrCSvo4MoSzRYjPv2muOCMFOLxPjFO4IKp4uShhUE7m137ibpxRBKyRqV-jM2tEQ1pg2BR_YLgxQ1ztfUIcAXIlpCEAw7gOW9FE3Ojajc0VVZRMt.jpg?r=e31',
  contentName: 'Money Heist',
  ageRating: '18+',
  isMovie:  false,
  duration: '',
  season: '5 Parts',
  quality: 'HD',
},
{
  key: 12,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ1esNvkP7PEAhZhgJk1FQMg6TmUYhTzqS5ryKBkNvU8AQw47b6QV57RFdLld6W1lwQDQnLcPIOxhq_7uOxK4HQE9WtxspXFvbXRM3r4r_JKNNDxCo1Zlx_xwQyMLnjj31K-.jpg?r=d38',
  contentName: 'Extraordinary Attorney Woo',
  ageRating: '18+',
  isMovie:  false,
  duration: '',
  season: '16 episodes',
  quality: 'HD',
},
{
  key: 13,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXKPpzDqQqzMcTFNDI0udLscTM05IeF_97UNbB1wfr3dIX08kQAOehnCMugzISAXMDgVEcRswXFbPLlfSEWkRQkuL5_GYJCTjsemzphXnQsSBWSby0dg_ZQWf719mp60OJJk.jpg?r=22e',
  contentName: 'One Piece',
  ageRating: '16+',
  isMovie:  false,
  duration: '',
  season: '8 epsiodes',
  quality: 'HD',
},
{
  key: 14,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaWmk9OHdORAPiQcBdy6t04QvDaFKcd8ia-kPzla_8g-sDSy12kq8aDptLDD-NoJi8fejlVUuVvxDsMdJX2M673FF7mTZU2yMsDUkzkQgKjWqD2K4zqfThL-JZoWhU1rIQjr.jpg?r=2e3',
  contentName: 'Stranger Things',
  ageRating: '16+',
  isMovie:  false,
  duration: '',
  season: '4 Seasons',
  quality: 'HD',
},
{
  key: 15,
  url: 'https://occ-0-2797-3647.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYw1YXVyO_US7wW4-UnLni58FQCvRCvI8z_hXtVD4DgTbLvwY4UxveFQaGni0KR0_Z37K96urr8BTgo0ebi4wJ_iB82U1cOSUK8.jpg?r=535',
  contentName: 'Demon Slayer',
  ageRating: '16+',
  isMovie:  false,
  duration: '',
  season: '5 Seasons',
  quality: 'HD',
},
];

function Continue({user = 'Guest'}){
  const Continue = `Continue Watching for ${user}`;
  const Hindi = `Movies Set in India`;
  return (
    <div className='container-collection'>
        <Cards containerName= {Continue} cards= {container1}/>
        <Cards containerName= {Hindi} cards= {container2}/>
        <Cards containerName= {Hindi} cards= {container3}/>
    </div>
  );
}
export default Continue;