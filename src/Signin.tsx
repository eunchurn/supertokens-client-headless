import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Box } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";
import { emailPasswordSignIn } from "supertokens-web-js/recipe/thirdpartyemailpassword";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

interface State {
  email: string;
  password: string;
}

const initState: State = {
  email: "",
  password: "",
};
export function Signin() {
  const [state, setState] = React.useState<State>(initState);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const signIn = React.useCallback(() => {
    emailPasswordSignIn({
      formFields: [
        { id: "email", value: state.email },
        { id: "password", value: state.password },
      ],
    }).then(() => navigate("/"));
  }, [navigate, state.email, state.password]);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main style={{ maxWidth: "600px" }}>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
            onChange={handleChange}
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            onChange={handleChange}
          />
          <Button sx={{ mt: 1 /* margin top */ }} onClick={signIn}>
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </Box>
  );
}
