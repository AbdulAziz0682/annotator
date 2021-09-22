import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TextInputBase from '../../TextInputBase';

export default function DesktopEditAccount({formik}){
    return(
        <div className="flex flex-col gap-3">
            <div className="flex flex-col" key="0">
                <div className="">Email</div>
                <div className="w-10/12">
                    <TextInputBase
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
            </div>
            <div className="flex flex-col" key="1">
                <div className="">Password</div>
                <div className="flex flex-col gap-3 w-10/12">
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
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </div>
            </div>
            <div className="flex flex-col" key="3">
                <div className="">Phone Number</div>
                <div className="w-10/12">
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
                </div>
            </div>
        </div>
    )
}