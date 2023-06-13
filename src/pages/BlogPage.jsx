import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { MdAccessTimeFilled } from 'react-icons/md'
import Container from '../layout/container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import { blogsData } from '../data'
import next from '../images/nextWhite.png'
import TruncatedText from '../components/truncatedText'
import Help from '../components/help'
import styles from './pages.module.scss'

function BlogPage() {
  const [dataNum, setDataNum] = useState(4)
  const [selectData, setSelectData] = useState({
    subject: "",
    tag: "",
    top: "",
    date: ""
  });

  const handleChange = (e, name) => {
    setSelectData({ ...selectData, [name]: e.target.value });
  };
  return (
    <div className={classNames(styles.blog, styles.page)}>
      <Container>
        <h2 className="page__title">Blog</h2>
        <div className={styles.blog__block}>
          <FormControl variant="filled" className={styles.blog__control}>
            <InputLabel id="subject-label" className={styles.blog__label}>subject</InputLabel>
            <Select
              labelId="subject-label"
              value={selectData.subject}
              onChange={(e) => handleChange(e, "subject")}
              className={styles.blog__select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"option1"} className={styles.blog__option}>Option 1</MenuItem>
              <MenuItem value={"option2"} className={styles.blog__option}>Option 2</MenuItem>
              <MenuItem value={"option3"} className={styles.blog__option}>Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={styles.blog__control}>
            <InputLabel id="tag-label" className={styles.blog__label}>tag</InputLabel>
            <Select
              labelId="tag-label"
              value={selectData.tag}
              onChange={(e) => handleChange(e, "tag")}
              className={styles.blog__select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"option1"} className={styles.blog__option}>Option 1</MenuItem>
              <MenuItem value={"option2"} className={styles.blog__option}>Option 2</MenuItem>
              <MenuItem value={"option3"} className={styles.blog__option}>Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={styles.blog__control}>
            <InputLabel id="top-label" className={styles.blog__label}>top</InputLabel>
            <Select
              labelId="top-label"
              value={selectData.top}
              onChange={(e) => handleChange(e, "top")}
              className={styles.blog__select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"option1"} className={styles.blog__option}>Option 1</MenuItem>
              <MenuItem value={"option2"} className={styles.blog__option}>Option 2</MenuItem>
              <MenuItem value={"option3"} className={styles.blog__option}>Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={styles.blog__control}>
            <InputLabel id="date-label" className={styles.blog__label}>date</InputLabel>
            <Select
              labelId="date-label"
              value={selectData.date}
              onChange={(e) => handleChange(e, "date")}
              className={styles.blog__select}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"option1"} className={styles.blog__option}>Option 1</MenuItem>
              <MenuItem value={"option2"} className={styles.blog__option}>Option 2</MenuItem>
              <MenuItem value={"option3"} className={styles.blog__option}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.blog__content}>
          {
            blogsData.slice(0,dataNum).map((blog) => (
              <div key={blog.id} className={styles.blog__box} >
                <img src={blog.image} alt={blog.title} className={styles.blog__image} />
                <div className={styles.blog__info}>
                  <TruncatedText max={1} text={blog.title} className={styles.blog__title} />
                  <TruncatedText max={3} text={blog.main} className={styles.blog__text} />
                  <p className={styles.blog__date}>
                    <span>
                      <MdAccessTimeFilled />
                      {blog.date}
                    </span>
                    <Link to={`/blog/${blog.id}`}>
                      <img src={next} alt="more" />
                    </Link>
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        <button className={styles.blog__more} onClick={()=>setDataNum(prev => prev + 4)}>More</button>
      </Container>
      <Help />
    </div>
  )
}

export default BlogPage