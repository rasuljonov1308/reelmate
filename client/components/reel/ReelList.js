import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ReelItem from './ReelItem';
import { fetchReels } from '../../services/reelService';

export default function ReelList() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    fetchReels().then(data => setReels(data));
  }, []);

  return (
    <FlatList
      data={reels}
      renderItem={({ item }) => <ReelItem reel={item} />}
      keyExtractor={item => item.id}
      vertical
    />
  );
}
