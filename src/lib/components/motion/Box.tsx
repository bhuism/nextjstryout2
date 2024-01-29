'use client';

import { motion } from 'framer-motion';

// const Providers = ({ children }: { children: React.ReactNode }) => {

const MyDiv: React.FC = ({ children }: React.PropsWithChildren) => (
  <div>{children}</div>
);

const MotionBox = motion(MyDiv);

export default MotionBox;
