import { Button, Grid, Typography, InputAdornment} from '@material-ui/core';
import { TextField } from '@material-ui/core';

import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import logo from '../../assets/afluence.png';
import account from '../../assets/account.png';
import smartPhone from '../../assets/smartphone.svg';
import key from '../../assets/key.svg';
import confirm from '../../assets/confirm.svg';

import { Link } from 'react-router-dom';

const inputIconSize = 16;

export default function MobileRegister({formik}){
    return (
        <Grid container alignItems="center" direction="column" className="justify-self-start">
            <Grid item className="w-80 flex items-center p-6">
                <img src={logo} alt="logo" style={{width: 100}}/>
                <Typography variant="h4" color="primary" style={{fontFamily: "'Montserrat', sans-serif"}}>annotator</Typography>
            </Grid>
            <Grid container item alignItems="center" direction="column" className="my-12" spacing={2}>
                <Grid item className="w-80">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        variant="standard"
                        placeholder="Email"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img style={{maxWidth: inputIconSize, minHeight: inputIconSize}} src={account} alt="account icon" className="mr-10" />
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.email && Boolean(formik.errors.email)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
                        }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item className="w-80">
                    <TextField
                        fullWidth
                        type="number"
                        id="phone"
                        name="phone"
                        variant="standard"
                        placeholder="Phone"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img style={{maxWidth: inputIconSize+5, minHeight: inputIconSize+5}} src={smartPhone} alt="smartPhone icon" className="mr-9" />
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.phone && Boolean(formik.errors.phone)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
                        }}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Grid>
                <Grid item className="w-80">
                    <TextField
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        variant="standard"
                        placeholder="Password"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img style={{maxWidth: inputIconSize, minHeight: inputIconSize}} src={key} alt="password key" className="mr-10" />                                        
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.email && Boolean(formik.errors.email)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
                        }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid item className="w-80">
                    <TextField
                        fullWidth
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        variant="standard"
                        placeholder="Confirm Password"
                        size="small"
                        className="flex-col-reverse"
                        InputProps={{
                            startAdornment:(
                                <InputAdornment postition="start">
                                    <img style={{maxWidth: inputIconSize, minHeight: inputIconSize}} src={confirm} alt="confirm icon" className="mr-10" />
                                </InputAdornment>
                            ),
                            endAdornment:(
                                (formik.touched.email && Boolean(formik.errors.email)) &&
                                <InputAdornment position="end">
                                    <ReportProblemOutlinedIcon color="secondary" className="w-5" />
                                </InputAdornment>
                            ),
                            className: "p-2 bg-gray-100 rounded-lg",
                            disableUnderline: true
                        }}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Grid>
            </Grid>
            <Grid item xs={7} className="flex flex-col items-center">
                <Button variant="contained" color="primary" type="submit" fullWidth className="px-2 text-2xl">Sign up</Button>
                <div className="w-80 flex justify-center items-center text-xs mt-2">
                    <span>Already have an account?</span>
                    <Link to="/login" className="font-bold mx-1">LOGIN HERE</Link>
                </div>
            </Grid>
        </Grid>
    )
}