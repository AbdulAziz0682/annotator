import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TextInputBase from '../../TextInputBase';

export default function DesktopEditAccount({formik}){
    return(
        <TableContainer>
            <Table aria-label="simple table" size="small">
                <TableBody>
                    <TableRow key="0">
                        <TableCell scope="row" className="border-r border-gray-600">Email</TableCell>
                        <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                            <TextInputBase
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow key="1">
                        <TableCell scope="row" className="border-r border-gray-600">Password</TableCell>
                        <TableCell scope="row" className="border-b border-gray-600 items-center flex gap-1 md:gap-3 justify-between">
                            <TextInputBase
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <TextInputBase
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Re-enter Password"
                                className="md:mr-60"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell scope="row" className="border-r border-gray-600">Phone Number</TableCell>
                        <TableCell scope="row" className="border-b border-gray-600 w-5/6">
                            <TextInputBase
                                id="phone"
                                type="number"
                                name="phone"
                                placeholder="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell scope="row" className="border-r border-b-0 border-gray-600 h-8">{''}</TableCell>
                        <TableCell scope="row" className="border-b-0 w-5/6">
                            {''}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}