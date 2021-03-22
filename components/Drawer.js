import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider, IconButton, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { commonLinks, data } from './data/drawersData';
import { useStyles } from './data/drawerStyles';

import Link from 'next/link';

const DrawerComponent = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  const chooseURLList = (chapter) => {
    if (chapter.title === 'Menganalisis Data') {
      return `analisis`;
    } else if (chapter.title === 'Ukuran Pemusatan Data') {
      return `pemusatan`;
    } else if (chapter.title === 'Ukuran Penyebaran Data') {
      return `penyebaran`;
    }
  }

  const [collapse, setCollapse] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (index) => {
    setCurrentIndex(index + 1)
    setCollapse(!collapse);
  };

  const SubChapters = ({ subChapter, chapter }) => {
    return (
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href={`/${chooseURLList(chapter)}/${subChapter.id}`}>
            <ListItem button className={classes.nested}>
              <ListItemText primary={subChapter.subTitle} />
            </ListItem></Link>
        </List>
      </Collapse>
    )
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >

      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />

      {data.map((chapter, chapterIndex) => {
        return (
          <div key={chapter.id}>

            {/* Lessons */}
            <ListItem button onClick={() => handleClick(chapterIndex)}>
              <ListItemText primary={chapter.title} />
              {collapse && currentIndex - 1 === chapterIndex ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            {/* Fires below list item when clicked */}
            {currentIndex === chapter.id ? chapter.items.map(subChapter => {
              return (
                <SubChapters subChapter={subChapter} key={subChapter.key} chapter={chapter} />
              )
            }) : null}
          </div>
        )
      })}

      {/* Links */}
      <Divider />
      <List>
        {commonLinks.map((item, index) => (
          <ListItem button key={index} >
            <Link href={item.link} onClick={() => item.action()}>
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer >
  )
}

export default DrawerComponent
