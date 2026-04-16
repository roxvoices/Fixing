'use client'

import { useState } from 'react'
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Settings,
  PlusCircle,
  Clock,
  CheckCircle,
  FileText,
  Megaphone,
  Image as ImageIcon,
  Eye,
  EyeOff,
  BarChart3,
  Video,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ALL_PROBLEMS as SEED_PROBLEMS, CATEGORIES } from '@/lib/allProblems'
import { Problem, FixRequest, Announcement, Advertisement } from '@/lib/types'
import { cn } from '@/lib/utils'

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [problems, setProblems] = useState<Problem[]>(SEED_PROBLEMS)
  const [fixRequests, setFixRequests] = useState<FixRequest[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [ads, setAds] = useState<Advertisement[]>([])

  const [isAdding, setIsAdding] = useState(false)
  const [isAddingAnnouncement, setIsAddingAnnouncement] = useState(false)
  const [isAddingAd, setIsAddingAd] = useState(false)
  const [editingProblem, setEditingProblem] = useState<Problem | null>(null)
  const [editingAnnouncement, setEditingAnnouncement] =
    useState<Announcement | null>(null)
  const [editingAd, setEditingAd] = useState<Advertisement | null>(null)

  const [problemSearch, setProblemSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const [formData, setFormData] = useState<Partial<Problem>>({
    title: '',
    shortDescription: '',
    category: 'phone',
    subcategory: '',
    symptoms: [],
    causes: [],
    steps: [],
    technicianAdvice: '',
    relatedProblemIds: [],
  })

  const [announcementForm, setAnnouncementForm] = useState<
    Partial<Announcement>
  >({
    title: '',
    content: '',
    type: 'info',
    isActive: true,
  })

  const [adForm, setAdForm] = useState<Partial<Advertisement>>({
    clientName: '',
    title: '',
    description: '',
    mediaUrl: '',
    mediaType: 'image',
    linkUrl: '',
    isActive: true,
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'Shawn' && password === 'Shawn1') {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Invalid credentials. Please try again.')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-12 px-4 max-w-md mx-auto">
        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to manage FixMyDevice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Username</label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              {loginError && (
                <p className="text-sm text-red-500">{loginError}</p>
              )}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this guide?')) {
      setProblems((prev) => prev.filter((p) => p.id !== id))
    }
  }

  const handleSave = () => {
    if (!formData.title) return
    const newProblem: Problem = {
      id: editingProblem?.id || Math.random().toString(36).substr(2, 9),
      title: formData.title || '',
      slug: (formData.title || '').toLowerCase().replace(/\s+/g, '-'),
      shortDescription: formData.shortDescription || '',
      category: (formData.category as Problem['category']) || 'phone',
      subcategory: formData.subcategory || '',
      symptoms: formData.symptoms || [],
      causes: formData.causes || [],
      steps: formData.steps || [],
      warning: formData.warning,
      technicianAdvice: formData.technicianAdvice || '',
      relatedProblemIds: formData.relatedProblemIds || [],
      isPopular: formData.isPopular || false,
      createdAt: editingProblem?.createdAt || new Date().toISOString(),
    }
    if (editingProblem) {
      setProblems((prev) =>
        prev.map((p) => (p.id === editingProblem.id ? newProblem : p))
      )
    } else {
      setProblems((prev) => [...prev, newProblem])
    }
    setIsAdding(false)
    setEditingProblem(null)
    setFormData({
      title: '',
      shortDescription: '',
      category: 'phone',
      subcategory: '',
      symptoms: [],
      causes: [],
      steps: [],
      technicianAdvice: '',
      relatedProblemIds: [],
    })
  }

  const updateRequestStatus = (id: string, status: FixRequest['status']) => {
    setFixRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status } : req))
    )
  }

  const handleSaveAnnouncement = () => {
    if (!announcementForm.title || !announcementForm.content) return
    const newAnnouncement: Announcement = {
      id: editingAnnouncement?.id || Math.random().toString(36).substr(2, 9),
      title: announcementForm.title,
      content: announcementForm.content,
      type: (announcementForm.type as Announcement['type']) || 'info',
      isActive: announcementForm.isActive ?? true,
      createdAt:
        editingAnnouncement?.createdAt || new Date().toISOString(),
    }
    if (editingAnnouncement) {
      setAnnouncements((prev) =>
        prev.map((a) => (a.id === editingAnnouncement.id ? newAnnouncement : a))
      )
    } else {
      setAnnouncements((prev) => [...prev, newAnnouncement])
    }
    setIsAddingAnnouncement(false)
    setEditingAnnouncement(null)
    setAnnouncementForm({ title: '', content: '', type: 'info', isActive: true })
  }

  const handleSaveAd = () => {
    if (!adForm.clientName || !adForm.title) return
    const newAd: Advertisement = {
      id: editingAd?.id || Math.random().toString(36).substr(2, 9),
      clientName: adForm.clientName,
      title: adForm.title,
      description: adForm.description || '',
      mediaUrl: adForm.mediaUrl || '',
      mediaType: (adForm.mediaType as Advertisement['mediaType']) || 'image',
      linkUrl: adForm.linkUrl,
      isActive: adForm.isActive ?? true,
      createdAt: editingAd?.createdAt || new Date().toISOString(),
    }
    if (editingAd) {
      setAds((prev) => prev.map((a) => (a.id === editingAd.id ? newAd : a)))
    } else {
      setAds((prev) => [...prev, newAd])
    }
    setIsAddingAd(false)
    setEditingAd(null)
    setAdForm({
      clientName: '',
      title: '',
      description: '',
      mediaUrl: '',
      mediaType: 'image',
      linkUrl: '',
      isActive: true,
    })
  }

  const filteredProblems = problems.filter(
    (p) =>
      p.title.toLowerCase().includes(problemSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(problemSearch.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(problemSearch.toLowerCase())
  )
  const totalPages = Math.ceil(filteredProblems.length / itemsPerPage)
  const paginatedProblems = filteredProblems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Panel</h1>
          <p className="text-slate-500">
            Manage troubleshooting guides, announcements, and advertisements.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-[10px] text-blue-500 uppercase font-bold tracking-wider">
                Live Problem Count
              </div>
              <div className="text-xl font-bold text-blue-700">
                {problems.length.toLocaleString()}
              </div>
            </div>
          </div>
          <Button
            onClick={() => setIsAdding(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" /> New Problem
          </Button>
        </div>
      </div>

      <Tabs defaultValue="problems" className="space-y-6 md:space-y-8">
        <TabsList className="bg-slate-100 p-1 rounded-xl w-full flex overflow-x-auto">
          <TabsTrigger value="problems" className="rounded-lg flex-1 py-2">
            <FileText className="w-4 h-4 mr-2 hidden sm:inline" /> Problems
          </TabsTrigger>
          <TabsTrigger value="requests" className="rounded-lg flex-1 py-2">
            <PlusCircle className="w-4 h-4 mr-2 hidden sm:inline" /> Requests
            {fixRequests.filter((r) => r.status === 'pending').length > 0 && (
              <Badge className="ml-2 bg-red-500 text-white border-none h-4 w-4 md:h-5 md:w-5 p-0 flex items-center justify-center rounded-full text-[9px] md:text-[10px]">
                {fixRequests.filter((r) => r.status === 'pending').length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="announcements" className="rounded-lg flex-1 py-2">
            <Megaphone className="w-4 h-4 mr-2 hidden sm:inline" />{' '}
            Announcements
          </TabsTrigger>
          <TabsTrigger value="ads" className="rounded-lg flex-1 py-2">
            <ImageIcon className="w-4 h-4 mr-2 hidden sm:inline" /> Ads &
            Advice
          </TabsTrigger>
        </TabsList>

        {/* Problems Tab */}
        <TabsContent value="problems">
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search problems by title, category..."
                className="pl-10"
                value={problemSearch}
                onChange={(e) => {
                  setProblemSearch(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 whitespace-nowrap">
              Showing {paginatedProblems.length} of {filteredProblems.length}{' '}
              problems
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Problem Title
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Category
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Subcategory
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Steps
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-700 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedProblems.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {p.title}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="capitalize">
                          {p.category}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {p.subcategory}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {p.steps.length}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setEditingProblem(p)
                              setFormData(p)
                              setIsAdding(true)
                            }}
                          >
                            <Edit className="w-4 h-4 text-slate-400" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(p.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalPages > 1 && (
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Requests Tab */}
        <TabsContent value="requests">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fixRequests.length > 0 ? (
              fixRequests.map((request) => (
                <Card
                  key={request.id}
                  className="border-slate-200 shadow-sm overflow-hidden"
                >
                  <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {request.deviceType}
                        </CardTitle>
                        <CardDescription>
                          {request.userName} ({request.email})
                        </CardDescription>
                      </div>
                      <Badge
                        className={cn(
                          'capitalize',
                          request.status === 'pending'
                            ? 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                            : request.status === 'reviewed'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                            : 'bg-green-100 text-green-700 hover:bg-green-100'
                        )}
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {request.problemDescription}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {new Date(request.createdAt).toLocaleString()}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-slate-50/50 border-t border-slate-100 p-4 flex justify-end gap-2">
                    {request.status === 'pending' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateRequestStatus(request.id, 'reviewed')
                        }
                      >
                        Mark Reviewed
                      </Button>
                    )}
                    {request.status === 'reviewed' && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => updateRequestStatus(request.id, 'added')}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" /> Mark Added
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <PlusCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">
                  No requests yet
                </h3>
                <p className="text-slate-500">
                  User requests will appear here once submitted.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Manage Announcements</h2>
            <Button
              onClick={() => setIsAddingAnnouncement(true)}
              variant="outline"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-2" /> New Announcement
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {announcements.map((a) => (
              <Card key={a.id} className="border-slate-200">
                <CardHeader className="py-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Badge
                        className={cn(
                          a.type === 'info'
                            ? 'bg-blue-100 text-blue-700'
                            : a.type === 'warning'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-green-100 text-green-700'
                        )}
                      >
                        {a.type}
                      </Badge>
                      <CardTitle className="text-lg">{a.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingAnnouncement(a)
                          setAnnouncementForm(a)
                          setIsAddingAnnouncement(true)
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setAnnouncements((prev) =>
                            prev.filter((item) => item.id !== a.id)
                          )
                        }
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-slate-600 text-sm">{a.content}</p>
                </CardContent>
                <CardFooter className="py-4 flex justify-between items-center bg-slate-50/50">
                  <span className="text-xs text-slate-400">
                    Created: {new Date(a.createdAt).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-2">
                    {a.isActive ? (
                      <Eye className="w-4 h-4 text-green-500" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="text-xs font-medium">
                      {a.isActive ? 'Active' : 'Hidden'}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
            {announcements.length === 0 && (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <Megaphone className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">No announcements posted yet.</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Ads Tab */}
        <TabsContent value="ads">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Manage Ads & Advice</h2>
            <Button
              onClick={() => setIsAddingAd(true)}
              variant="outline"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-2" /> New Ad
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ads.map((ad) => (
              <Card
                key={ad.id}
                className="border-slate-200 overflow-hidden"
              >
                <div className="aspect-video bg-slate-100 relative">
                  {ad.mediaType === 'image' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={ad.mediaUrl || 'https://picsum.photos/seed/ad/800/450'}
                      alt={ad.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white">
                      <Video className="w-12 h-12 opacity-50" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={ad.isActive ? 'bg-green-500' : 'bg-slate-500'}
                    >
                      {ad.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{ad.title}</CardTitle>
                      <CardDescription>
                        Client: {ad.clientName}
                      </CardDescription>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingAd(ad)
                          setAdForm(ad)
                          setIsAddingAd(true)
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setAds((prev) =>
                            prev.filter((item) => item.id !== ad.id)
                          )
                        }
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {ad.description}
                  </p>
                </CardContent>
                <CardFooter className="py-4 bg-slate-50/50 flex justify-between items-center">
                  <span className="text-xs text-slate-400">
                    {ad.mediaType.toUpperCase()}
                  </span>
                  {ad.linkUrl && (
                    <a
                      href={ad.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 flex items-center gap-1 hover:underline"
                    >
                      View Link <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
            {ads.length === 0 && (
              <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">
                  No advertisements or paid advice entries yet.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add/Edit Problem Dialog */}
      <Dialog
        open={isAdding}
        onOpenChange={(open) => {
          if (!open) {
            setIsAdding(false)
            setEditingProblem(null)
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProblem ? 'Edit Problem' : 'Add New Problem'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the troubleshooting guide.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g. Phone not charging"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Short Description</label>
              <Input
                value={formData.shortDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    shortDescription: e.target.value,
                  })
                }
                placeholder="Brief summary of the issue"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value as Problem['category'],
                    })
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subcategory</label>
                <Input
                  value={formData.subcategory}
                  onChange={(e) =>
                    setFormData({ ...formData, subcategory: e.target.value })
                  }
                  placeholder="e.g. Charging"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Technician Advice</label>
              <textarea
                className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm min-h-[100px]"
                value={formData.technicianAdvice}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    technicianAdvice: e.target.value,
                  })
                }
                placeholder="When should they see a pro?"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isPopular"
                checked={formData.isPopular}
                onChange={(e) =>
                  setFormData({ ...formData, isPopular: e.target.checked })
                }
              />
              <label htmlFor="isPopular" className="text-sm font-medium">
                Mark as Popular
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save Problem
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Announcement Dialog */}
      <Dialog open={isAddingAnnouncement} onOpenChange={setIsAddingAnnouncement}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingAnnouncement
                ? 'Edit Announcement'
                : 'Post New Announcement'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={announcementForm.title}
                onChange={(e) =>
                  setAnnouncementForm({
                    ...announcementForm,
                    title: e.target.value,
                  })
                }
                placeholder="Announcement Title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <textarea
                className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm min-h-[100px]"
                value={announcementForm.content}
                onChange={(e) =>
                  setAnnouncementForm({
                    ...announcementForm,
                    content: e.target.value,
                  })
                }
                placeholder="What do you want to announce?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select
                className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm"
                value={announcementForm.type}
                onChange={(e) =>
                  setAnnouncementForm({
                    ...announcementForm,
                    type: e.target.value as Announcement['type'],
                  })
                }
              >
                <option value="info">Information</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="announcementActive"
                checked={announcementForm.isActive}
                onChange={(e) =>
                  setAnnouncementForm({
                    ...announcementForm,
                    isActive: e.target.checked,
                  })
                }
              />
              <label
                htmlFor="announcementActive"
                className="text-sm font-medium"
              >
                Active (Visible to users)
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddingAnnouncement(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveAnnouncement}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save Announcement
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Ad Dialog */}
      <Dialog open={isAddingAd} onOpenChange={setIsAddingAd}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingAd ? 'Edit Ad/Advice' : 'Add New Ad/Advice'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Client Name</label>
              <Input
                value={adForm.clientName}
                onChange={(e) =>
                  setAdForm({ ...adForm, clientName: e.target.value })
                }
                placeholder="Who is paying for this?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ad Title</label>
              <Input
                value={adForm.title}
                onChange={(e) =>
                  setAdForm({ ...adForm, title: e.target.value })
                }
                placeholder="Catchy Title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm min-h-[80px]"
                value={adForm.description}
                onChange={(e) =>
                  setAdForm({ ...adForm, description: e.target.value })
                }
                placeholder="Ad content or advice text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Media Type</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm"
                  value={adForm.mediaType}
                  onChange={(e) =>
                    setAdForm({
                      ...adForm,
                      mediaType: e.target.value as Advertisement['mediaType'],
                    })
                  }
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Media URL</label>
                <Input
                  value={adForm.mediaUrl}
                  onChange={(e) =>
                    setAdForm({ ...adForm, mediaUrl: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Target Link (Optional)
              </label>
              <Input
                value={adForm.linkUrl}
                onChange={(e) =>
                  setAdForm({ ...adForm, linkUrl: e.target.value })
                }
                placeholder="https://..."
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adActive"
                checked={adForm.isActive}
                onChange={(e) =>
                  setAdForm({ ...adForm, isActive: e.target.checked })
                }
              />
              <label htmlFor="adActive" className="text-sm font-medium">
                Active (Visible to users)
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingAd(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveAd}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save Ad
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
