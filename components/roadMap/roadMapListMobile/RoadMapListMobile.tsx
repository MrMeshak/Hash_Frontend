import React, {useState} from 'react';
import { selectRoadMapLibraries, useAppSelector } from '../../../store/hooks';
import PostList from '../../library/postList/PostList';
import RoadMapControlBar from '../roadMapControlBar/RoadMapControlBar';
import { statusValuesMap } from '../../../helpers/postStatusValueMap';

export interface IRoadMapListMobileProps {
}

export default function RoadMapListMobile (props: IRoadMapListMobileProps) {
  const libraries = useAppSelector(selectRoadMapLibraries())
  const [selectedStatus, setSelectedStatus] = useState('PLANNED');


  return (
    <div>
      <RoadMapControlBar selectedStatus={selectedStatus} libraries={libraries} setSelectedStatus={setSelectedStatus}/>
      <PostList displayLibraryEmpty={false} displayPostWithStatus={true} posts={libraries[statusValuesMap.get(selectedStatus)?.libraryIndex || 0].posts}/>
    </div>
  );
}
