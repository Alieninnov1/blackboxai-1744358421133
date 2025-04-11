import React, { useCallback, useState } from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import Button from './Button'; // Import the Button component

const initialNodes = [
  {
    id: '1',
    type: 'default',
    data: { label: 'You' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'AI-Matched Project' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'default',
    data: { label: 'Decentralized Archive' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

export default function NeuralDashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [proposal, setProposal] = useState('');
  const [cid, setCid] = useState(null);
  const [copied, setCopied] = useState(false);

  const generateProposal = async () => {
    // Logic for generating proposal
  };

  const storeToIPFS = async (proposalText) => {
    // Logic for storing to IPFS
  };

  const copyCID = async () => {
    // Logic for copying CID
  };

  return (
    <ReactFlowProvider>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      {/* Additional UI components */}
    </ReactFlowProvider>
  );
}
