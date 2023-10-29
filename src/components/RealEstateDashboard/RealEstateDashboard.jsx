import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  Radio,
  Rating,
  TextField,
  Typography,

} from '@mui/material';

import {
  AnalyticsIcon,
  BootsIcon,
  DashboardIcon,
  DocumentsIcon,
  ExpiredListing,
  listIcon,
  message,
  musicIcon,
  ProfilePhoto,
  rightboxsmallimage,
  rightimage,
  SwitchIcon,
  VirtualofficeIcon,
  MenuIcon,
  settingsIcon,
} from '../../imagessidebar/index.js';


import {
  StyledListItemText,
  StyledListItem,
  StyledRadio,
  StyledRightBarTypo,
  StyledTeamName,
  StyledInputUploads,
  StyledButtonInputUploads,
  StyledButton,
} from './RealEstateDashboard.style.js';


export default function RealEstateDashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '105vh',
        overflow: 'hidden',
        border: '3px solid #315EFBB2',
        margin: '11px 16px',
        borderRadius: '44px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 9 }}>
        <Box
          variant="permanent"
          sx={{ width: 240, flexShrink: 0, height: '100vh' }}
        >
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#315EFBD9',
              height: '83vh',
              marginTop: '12vh',
              padding: '32px 16px 72px 0px',
              borderRadius: '0px 35px 0px 40px',
            }}
          >
            <Box component="div">
              <StyledListItem button>
                <img src={DashboardIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="DASHBOARD" />
              </StyledListItem>
              <StyledListItem button>
                <img src={listIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="CURRENT LISTINGS" />
              </StyledListItem>
              <StyledListItem button>
                <img src={ExpiredListing} alt="ExpiredListing" />
                <StyledListItemText primary="EXPIRED LISTINGS" />
              </StyledListItem>
              <StyledListItem button>
                <img src={message} alt="Dashboard Icon" />
                <StyledListItemText primary="MESSAGE" />
              </StyledListItem>
              <StyledListItem button>
                <img src={BootsIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="BOOTS MARKETING" />
              </StyledListItem>
              <StyledListItem button>
                <img src={VirtualofficeIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="VIRTUAL OFFICE" />
              </StyledListItem>
              <StyledListItem button>
                <img src={DocumentsIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="DOCUMENTS" />
              </StyledListItem>
              <StyledListItem button>
                <img src={AnalyticsIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="ANALYTICS" />
              </StyledListItem>
              <StyledListItem button>
                <img src={musicIcon} alt="Dashboard Icon" />
                <StyledListItemText primary="" />
              </StyledListItem>
            </Box>
            <StyledListItem button>
              <img src={settingsIcon} alt="settingsIcon" />
              <StyledListItemText primary="SETTINGS" />
            </StyledListItem>
          </List>
        </Box>
        <Grid
          container
          spacing={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '12vh',
            padding: '32px 16px 16px 16px',
          }}
        >
          <Grid
            item
            xs={9}
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            <img
              src={MenuIcon}
              alt="SwitchIcon"
              style={{ marginRight: '16px' }}
            />
            <Avatar src={ProfilePhoto} alt="SwitchIcon" />
            <Typography variant="h5" style={{ color: '#315EFB' }}>
              Good Morning Logan
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <img
              src={SwitchIcon}
              alt="SwitchIcon"
              style={{
                padding: '8px',
                border: '2px solid #FDFDFD',
                borderRadius: '4px',
                boxShadow: '13px 16.5px 15.49px -10.86px rgba(0, 0, 0, 0.20)',
              }}
            />
          </Grid>
          <Grid
            container
            style={{ width: '100%', marginTop: '16px', marginLeft: '24px' }}
          >
            <Grid
              item
              xs={9.74}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '95vh',
                justifyContent: 'flex-start',
                gap: '16px',
                paddingRight: "16px",
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  gap: '0px 12px 0px 12px',

                }}
              >
                <Box style={{ display: 'flex', flexDirection: 'row', color: "#585656" }}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Rental" style={{ color: "#315EFB" }}
                    value="Rental"
                  />
                  <FormControlLabel
                    value="Sales"
                    control={<Radio />}
                    label="Sales"
                  />
                  <FormControlLabel
                    value="Commercial Leasing"
                    control={<Radio />}
                    label="Commercial Leasing"
                  />
                  <FormControlLabel
                    value="Commercial Sales"
                    control={<Radio />}
                    label="Commercial Sales"
                  />
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '12px',
                    padding: '0px 12px 12px 12px',
                    border: "1px solid #315EFB",
                    boxShadow: '13px 16.5px 15.49px -10.86px rgba(0, 0, 0, 0.20)',
                    borderRadius:"4px",
                  }}
                >
                  <Grid container style={{ borderBottom: '1px solid #315EFB' }}>
                    <Grid
                      item
                      xs={5.8}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '66%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Address
                                <span
                                  style={{
                                    color: 'red',
                                    padding: '0px 16px 0px 0px',
                                  }}
                                >
                                  *
                                </span>
                                |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 20px ' }}
                              >
                                Apt#
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Town |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                State |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Zip code |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                          label=""
                          type='date'
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '29%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px', fontSize: "18px" }}
                              >
                                Listing Date{' '}
                                <span
                                  style={{
                                    color: 'red',
                                    padding: '0px 24px 0px 0px',
                                  }}
                                >
                                  *
                                </span>
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>
                      {/* No Fees Fee */}
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel style={{ color: "#585656", width: "33%" }}
                          value="No Fees"
                          control={<Radio />}
                          label="No Fees"
                        />
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Fee
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          select
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '33%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                OP |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>

                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                          label=""
                          select
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '50%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Terms
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          select
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '50%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Offer
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                          control={
                            <span style={{ color: "#FFCF3D" }}>
                              <Checkbox style={{ color: "#FFCF3D" }} />
                            </span>
                          }
                          label="Pet Friendly"
                          style={{ color: "#585656" }}
                        />
                        <FormControlLabel
                          control={
                            <span style={{ color: "#FFCF3D" }}>
                              <Checkbox style={{ color: "#FFCF3D" }} />
                            </span>
                          }
                          label="30 Minute Showing"
                          style={{ color: "#585656" }}
                        />

                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={0.1}
                      style={{
                        margin: '8px 8px 8px 16px',
                        borderLeft: '1px solid #315EFB',
                      }}
                    ></Grid>
                    <Grid
                      item
                      xs={5.8}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Box style={{ display: 'flex', flexDirection: 'row' }} >
                        <TextField
                          label=""
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '100%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Listing Amount{' '}
                                <span
                                  style={{
                                    color: 'red',
                                    padding: '0px 16px 0px 0px',
                                  }}
                                >
                                  *
                                </span>
                                |
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>
                      <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField
                          label=""
                          type="date"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '50%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Date
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        <TextField
                          label=""
                          type="Time"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: '50%' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                style={{ padding: '0px 8px' }}
                              >
                                Time
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Box>


                      <Box style={{ display: "flex", justifyContent: "flex-end", paddingRight: "8px" }}>

                        <Box style={{ border: "1px solid #315EFB", padding: "2px 6px", marginTop: "8px" }}>
                          +
                        </Box>
                      </Box>

                    </Grid>
                  </Grid>
                  <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: '0px solid #315EFB' }}>
                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "47%", gap: "6px" }}>
                      <StyledInputUploads style={{ fontSize: "18px" }}>File Pictures</StyledInputUploads>
                      <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", border: "2px solid #315EFB", backgroundColor: "#fff", padding: "1.5px", borderRadius: "2px", boxShadow: '1px 7px 16px -2px rgba(34, 34, 34, 0.35)' }}>
                        <StyledButtonInputUploads>Choose Files</StyledButtonInputUploads>
                        <StyledInputUploads style={{ display: "flex", alignItems: "center", width: "52%" }}>No File Chosen </StyledInputUploads>
                      </Box>
                    </Box>

                    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "47%", gap: "6px" }}>
                      <StyledInputUploads style={{ fontSize: "18px" }}>Upload FL Plans (pdf)</StyledInputUploads>
                      <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", border: "2px solid #315EFB", backgroundColor: "#fff", padding: "1.5px", borderRadius: "2px", boxShadow: '1px 7px 16px -2px rgba(34, 34, 34, 0.35)' }}>
                        <StyledButtonInputUploads>Choose Files</StyledButtonInputUploads>
                        <StyledInputUploads style={{ display: "flex", alignItems: "center", width: "52%" }}>No File Chosen </StyledInputUploads>
                      </Box>
                    </Box>
                  </Grid>


                  <Grid>
                    <Box style={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                      <FormControlLabel
                        value="Apartment"
                        control={<Radio />}
                        label="Apartment" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Studio"
                        control={<Radio />}
                        label="Studio" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="House"
                        control={<Radio />}
                        label="House" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Coop"
                        control={<Radio />}
                        label="Coop" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Condo"
                        control={<Radio />}
                        label="Condo" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Townhouse"
                        control={<Radio />}
                        label="Townhouse" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Brownstone"
                        control={<Radio />}
                        label="Brownstone" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Estate"
                        control={<Radio />}
                        label="Estate" style={{ width: "11%", color: "#585656" }}
                      />
                      <FormControlLabel
                        value="Vacation"
                        control={<Radio />}
                        label="Vacation" style={{ width: "11%", color: "#585656" }}
                      />
                    </Box>
                  </Grid>

                  <Grid container spacing={0}>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "space-between", height: "40px", }}>
                      <button style={{ fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB` }}>
                        Bedrooms
                      </button>
                      <button style={{ fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB` }}>
                        Bathrooms
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Square Sqft
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Exterior Sqft
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Maintenance Fee
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Real Estate Tax
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Financing
                      </button>
                      <button style={{
                        fontSize: "15px", color: "#585656", width: "calc(12.5% - 8px)", background: '#fff', borderRadius: "3px", border: `1px solid #315EFB`,
                      }}>
                        Minimum Down
                      </button>
                    </Box>
                  </Grid>

                  <Grid container spacing={0}>
                    <Box style={{ width: "100%" }} >
                      <StyledInputUploads style={{ fontSize: "18px" }}>Amenities</StyledInputUploads>
                      <StyledButton>Penthouse</StyledButton>
                      <StyledButton>Triplex</StyledButton>
                      <StyledButton>Duplex</StyledButton>
                      <StyledButton>Doorman</StyledButton>
                      <StyledButton>Storage</StyledButton>
                      <StyledButton>Elevator</StyledButton>
                      <StyledButton>Parking</StyledButton>
                      <StyledButton>Laundry</StyledButton>
                      <StyledButton style={{ paddingLeft: "30px", paddingRight: "30px" }}>Personal Laundry Room</StyledButton>
                      <StyledButton>Eat-in-Kitchen</StyledButton>
                      <StyledButton style={{ paddingLeft: "30px", paddingRight: "30px" }}>Stainless Steel Appliances</StyledButton>
                      <StyledButton style={{ paddingLeft: "30px", paddingRight: "30px" }}>Custom Countertops</StyledButton>
                      <StyledButton>Microwave</StyledButton>
                      <StyledButton>Centeral Air</StyledButton>
                      <StyledButton>Air Conditioning</StyledButton>
                      <StyledButton>Fireplace</StyledButton>
                      <StyledButton>Balcony</StyledButton>
                      <StyledButton>Juliet-balcony</StyledButton>
                      <StyledButton style={{ paddingLeft: "30px", paddingRight: "30px" }}>French balcony</StyledButton>
                      <StyledButton>Terrace</StyledButton>
                      <StyledButton>Wine Cellar</StyledButton>
                      <StyledButton>Gym</StyledButton>
                      <StyledButton>Spa</StyledButton>
                      <StyledButton>Pool</StyledButton>
                      <StyledButton>Mezzanine</StyledButton>
                      <StyledButton>Courtyard</StyledButton>
                      <StyledButton>Backyard</StyledButton>
                      <StyledButton>Waterfront</StyledButton>
                      <StyledButton>Cul-de-Sac</StyledButton>
                    </Box>
                  </Grid>

                </Box>
              </Box>
              <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "97%", border: "1px solid #315EFB",borderRadius:"4px", padding: "16px 16px 20px 16px", boxShadow: '13px 16.5px 15.49px -10.86px rgba(0, 0, 0, 0.30)' }}>
                <Box style={{ display: "flex", flexDirection: "column", width: "86%", gap: "8px" }}>
                  <StyledInputUploads style={{ fontSize: "18px" }}>Discription</StyledInputUploads>

                  <TextField
                    label=""
                    multiline
                    id="standard-start-adornment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ padding: '0px 48px' }}
                        >
                          Title |
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                  <TextField
                    label=""
                    multiline
                    value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias voluptate ullam ut nostrum natus, hic laudantium optio inventore placeat quas, non ipsam? Cum veniam qui accusantiu"}
                    id="standard-start-adornment"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ padding: '0px 12px' }}
                        >
                          Message |
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                </Box>
                <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                  <Button style={{ borderRadius: "100px", backgroundColor: "#315EFB", color: "#fff", padding: "16px 48px", textTransform: "none", }}>Submit</Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2.26}>
              <Grid
                container
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '91vh',
                  justifyContent: 'flex-start',
                  borderRadius: '8px',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: "16px",
                  boxShadow: '0 0 18.91px 1.89px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src={rightimage}
                  style={{ border: '1px solid #fff', borderRadius: '8px', width: "98%" }}
                />
                <StyledRightBarTypo>THE HOLDEN TEAM</StyledRightBarTypo>
                <Grid container style={{ padding: '0px 16px', gap: '16px' }}>
                  <Grid
                    item
                    xs={5.5}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #315EFB',
                      padding: '12px',
                      boxShadow:
                        '6.59px 8.37px 7.86px -5.51px rgba(0, 0, 0, 0.35)',
                    }}
                  >
                    <img src={rightboxsmallimage} />
                    <StyledTeamName style={{ marginTop: '8px' }}>
                      Warren Keiss
                    </StyledTeamName>
                    <Rating
                      name="read-only"
                      value={5}
                      size="small"
                      style={{ fontSize: '12px' }}
                      readOnly
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.5}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #315EFB',
                      padding: '12px',
                      boxShadow:
                        '6.59px 8.37px 7.86px -5.51px rgba(0, 0, 0, 0.35)',
                    }}
                  >
                    <img src={rightboxsmallimage} />
                    <StyledTeamName style={{ marginTop: '8px' }}>
                      Warren Keiss
                    </StyledTeamName>
                    <Rating
                      name="read-only"
                      value={5}
                      size="small"
                      style={{ fontSize: '12px' }}
                      readOnly
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}


