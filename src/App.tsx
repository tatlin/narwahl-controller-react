import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from '@react-three/drei';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Three Fiber with Material-UI</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="body1" gutterBottom>
          This is a basic example of integrating React Three Fiber with Material-UI in a TypeScript React application.
        </Typography>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </Container>
    </div>
  );
}

export default App;
